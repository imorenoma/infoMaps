<template>
    <div>
        <h2 v-if="!currentUser">Entra con tu cuenta, o crea una, y comienza a explorar!</h2>
        <span v-if="currentUser"> Bienvenido {{ currentUser.displayName }}</span>
        <button v-if="currentUser" :on-click="logoutUser()"> Log out</button>

        <span v-else>
            <div id="firebaseui-auth-container"></div>
        </span>
    </div>
</template>
  
<script lang="ts" setup>

import { EmailAuthProvider, GoogleAuthProvider , getAuth, signOut } from 'firebase/auth';
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { useCurrentUser } from 'vuefire';

const currentUser = useCurrentUser()
const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(useFirebaseAuth());
const config = {
    signInOptions: [
        //GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: "",
    callbacks: {
        signInSuccessWithAuthResult() {
            console.log("Successfully signed in");
           return true;
        },
    },
}

onMounted(() => {
    ui.start("#firebaseui-auth-container", config);
})
function logoutUser() {
    let auth = getAuth();
    signOut(auth).then(() => {
        async (event) => {
  await sendRedirect(event, '/login', 302)
}
    }).catch((error) => {
        // An error happened.
    });
}
</script>

<!--

    
-->