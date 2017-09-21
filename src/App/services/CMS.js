import { initializeApp, database } from 'firebase'

const config = {
  apiKey: "AIzaSyBS3A7XkkjiKfGjLOJiE-k3IiBd49MOH-o",
  authDomain: "resume-page-40ed7.firebaseapp.com",
  databaseURL: "https://resume-page-40ed7.firebaseio.com",
  projectId: "resume-page-40ed7",
}
initializeApp(config);

const data = database()
const PROFILE_REF = '/profile'
const EXPERIENCE_REF = '/experience'

export default class CMS {

  static get Profile () {
    return data.ref(PROFILE_REF).once('value').then((snap) => snap.val())
  }

  static get Experience () {
    return data.ref(EXPERIENCE_REF).once('value').then((snap) => snap.val())
  }



}