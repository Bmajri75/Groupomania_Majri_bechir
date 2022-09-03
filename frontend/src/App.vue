<!-- Le fichier App.vue est le composant racine.
C'est le premier composant de l'application qui est chargé 
et instancié par createApp().  -->


<!-- ! Le DOM (Document Object Model)
Le DOM permet de passer du HTML à un grand objet document qui est un arbre regroupant tous les éléments déclarés en HTML.
Autrement dit, lorsque le navigateur reçoit le HTML de la page,
il va le parser (c'est-à-dire l'analyser) et le transformer en DOM grâce à des algorithmes.
Ainsi, les attributs HTML deviennent automatiquement des propriétés des objets du DOM.
Par exemple :
<body id="page">
Devient un nœud sur l'objet document qui sera un objet body contenant une propriété
id contenant la valeur page.  

 ! Le DOM virtuel

Vue.js utilise donc un DOM virtuel (appelé VDOM) qui est une représentation du DOM en JavaScript.
Le DOM virtuel n'est donc qu'un simple, immense, objet JavaScript :

 ! En résumé,
  Vue.js va créer au départ un DOM virtuel puis le convertir en DOM HTML pour l'affichage lors du montage. 
Ainsi, seules les insertions, les modifications et les suppressions d'éléments HTML absolument nécessaires sont effectuées, 
ce qui permet un énorme gain de performance. 
 -->
<script>
export default {
  name: 'App',
}
</script> 
<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
</style>
  

 <!-- !Les Single-File Components (SFC)

Les SFC sont des composants écrits dans des fichiers qui terminent par l'extension .vue.
Un SFC comporte la logique du composant (partie script en JavaScript / TypeScript), 
le template (en HTML) et le style (en CSS ou Sass).  -->