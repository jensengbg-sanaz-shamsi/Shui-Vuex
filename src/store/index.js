import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'
import router from './../router'
import CryptoJS from 'crypto-js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    API: 'http://localhost:3000',
    flows: Array,
    followed: Array,
  },
  mutations: {
    setFlows(state, flows) {
      state.flows = flows;
    },
    setFollowed(state, followed) {
      state.followed = followed;
    },  
  },
  actions: {
    async fetchFlows(ctx) {
      try {
        const flows = await ax.get(`${ctx.state.API}/flows`, {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('shuiToken')}`,
          }
        })
        let decFlows = flows.data.map(flow => {
          let decryptInfo = CryptoJS.AES.decrypt(flow.info, sessionStorage.getItem('shuiKey')).toString(CryptoJS.enc.Utf8)
          flow.info = decryptInfo;
          return flow
        })
        ctx.commit('setFlows', decFlows);
        
      } catch (err) {
        console.log(err)
      }
    },

    //new flow
    async createdflow(ctx, newFlow) {
      const createdflow = await ax.post(
        `${ctx.state.API}/flows`, newFlow, {
          headers: {
            'authorization': `Bearer ${sessionStorage.getItem('shuiToken')}`,
          },
        }
      );
      router.push('/flow')
      console.log("newflow", createdflow);
      ctx.dispatch('fetchFlows');
    },


    async signUp(ctx, data) {
      try {
        await ax.post(`${ctx.state.API}/users`, {
          username: data.username,
          password: data.password,
        });
        router.push('/login');
      } catch (err) {
        console.log(err);
      }
    },
    async login(ctx, data) {
      try {
        const token = await ax.post(`${ctx.state.API}/auth/login`,
          {
            username: data.username,
            password: data.password,
          },
        );
        sessionStorage.setItem("shuiToken", token.data.token);
        sessionStorage.setItem("shuiKey", token.data.userkey);
        router.push('/flow');
      } catch (error) {
        console.error(error);
      }
    },
    async followedHashtags(ctx) {
      const followed = await ax.get(`${ctx.state.API}/hashtags`, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("shuiToken")}`,
          },
        }
      );
      ctx.commit("setFollowed", followed);
    },
    async addHashtag(ctx, hashtag) {
      await ax.post(`${ctx.state.API}/hashtags`, { hashtagsFollowed: hashtag }, {
          headers: {
            authorization: `Bearer ${sessionStorage.getItem("shuiToken")}`,
          },
        }
      );
    },
    async removeHashtag(ctx, hashtag) {
      await ax.post(`${ctx.state.API}/hashtags/remove`, {hashtagsFollowed: [hashtag]}, {
        headers: {
          'authorization': `Bearer ${sessionStorage.getItem('shuiToken')}`
        }
      })
    },
    async deleteUser(ctx) {
      await ax.delete(`${ctx.state.API}/users`, {
        headers: {
          authorization: `Bearer ${sessionStorage.getItem('shuiToken')}`
        }
      })
      sessionStorage.clear();
      router.push('/removed')
    }
},
getters: {
  allHashtags(state) {
    let allHashs = state.flows.map((flow) => flow.hashtags);
    const mergeArr = [].concat.apply([], allHashs);
    let removeDubs = [...new Set(mergeArr)];
    return removeDubs;
  },
},
  modules: {
}
  })
