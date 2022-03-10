import Vue from 'vue';
import Vuex from 'vuex';
// import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js';
// import { fetchJobsList } from '../api/index.js';
// import { fetchAskList } from '../api/index.js';
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        news: [],
        jobs: [],
        ask: [],
        user: {},
        item: [],
    },
    getters: {
        fetchedAsk(state) {
            return state.ask;
        }
    },
    // mutations: mutations,
    mutations,
    // mutations: {
        // SET_NEWS: function () {
        // SET_NEWS(state, news) {
        //     state.news = news;
        // },
        // SET_JOBS(state, jobs) {
        //     state.jobs = jobs;
        // },
        // SET_ASK(state, ask) {
        //     state.ask = ask;
        // },
    // },
    // actions: actions,
    actions,
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 console.log(response.data);
    //                 context.commit('SET_NEWS', response.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             });
    //     },
        // 구조 분해 문법(Destructuring)
        // FETCH_JOBS({ commit }) {
        //     fetchJobsList()
        //         .then(({ data }) => {
        //             commit('SET_JOBS', data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // },
        // FETCH_ASK({ commit }) {
        //     fetchAskList()
        //         .then(({ data }) => {
        //             commit('SET_ASK', data);
        //         })
        //         .catch(error => {
        //             console.log(error);
        //         });
        // },
    // }
});