<template>
  <div id="cloud"></div>
</template>

<script>
import { METHODS } from 'node:http';
export default {
    name: "cloudWords",
  data() {
    return {
    skillsToDraw = [
    	{ text: 'javascript', size: 40 },
    	{ text: 'D3.js', size: 15 },
    	{ text: 'coffeescript', size: 25 },
    	{ text: 'shaving sheep', size: 25 },
    	{ text: 'AngularJS', size: 30 },
    	{ text: 'Ruby', size: 30 },
    	{ text: 'ECMAScript', size: 15 },
    	{ text: 'Actionscript', size: 10 },
    	{ text: 'Linux', size: 20 },
    	{ text: 'C++', size: 20 },
    	{ text: 'C#', size: 25 },
    	{ text: 'JAVA', size: 38 },
      // just copy twice for extra data, else the cloud is a little boring
    	{ text: 'javascript', size: 40 },
    	{ text: 'D3.js', size: 15 },
    	{ text: 'coffeescript', size: 25 },
    	{ text: 'shaving sheep', size: 25 },
    	{ text: 'AngularJS', size: 30 },
    	{ text: 'Ruby', size: 30 },
    	{ text: 'ECMAScript', size: 15 },
    	{ text: 'Actionscript', size: 10 },
    	{ text: 'Linux', size: 20 },
    	{ text: 'C++', size: 20 },
    	{ text: 'C#', size: 25 },
    	{ text: 'JAVA', size: 38 },
    	{ text: 'javascript', size: 40 },
    	{ text: 'D3.js', size: 15 },
    	{ text: 'coffeescript', size: 25 },
    	{ text: 'shaving sheep', size: 25 },
    	{ text: 'AngularJS', size: 30 },
    	{ text: 'Ruby', size: 30 },
    	{ text: 'ECMAScript', size: 15 },
    	{ text: 'Actionscript', size: 10 },
    	{ text: 'Linux', size: 20 },
    	{ text: 'C++', size: 20 },
    	{ text: 'C#', size: 25 },
    	{ text: 'JAVA', size: 38 }
    ],
    }
  } ,
  methods: {
      
  }
};
</script>

<style>
</style>