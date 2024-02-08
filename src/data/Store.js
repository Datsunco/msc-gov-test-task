import {makeAutoObservable} from "mobx";

export default class Store {
    activeSkills = []

    constructor() {
        makeAutoObservable(this);
    }

    setActiveSkills(skills){
        this.activeSkills = skills
    }

}