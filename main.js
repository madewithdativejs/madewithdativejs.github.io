import Dative from 'https://cdn.jsdelivr.net/gh/dativeJs/dativejs@main/dist/dative.es.min.js';

import './src/all.js';

Dative.importstyle('css/all')

var app = new Dative({
  el: '#app',
  data:{
    title: 'Made with DativeJs',
    link: '/',
    date: new Date().getFullYear(),
    projects: [],
    img: 'https://dativejs.js.org/public/logo.png'
  },
  template(){
    return `
      <nav class="bg-white nav-fixed shadow-lg">
			<div class="max-w-6xl mx-auto px-4">
				<div class="flex justify-between">
					<div class="flex space-x-7">
						<div>
							<a href="#" class="flex items-center py-4 px-2">
								<img :src="img" alt="Logo" class="h-8 w-8 mr-2">
								<span class="font-semibold text-gray-500 text-lg">{{ title }}</span>
							</a>
						</div>
						
					</div>
					<!-- Secondary Navbar items -->
					<div class="hidden md:flex items-center space-x-3 ">
						<a href="https://github.com/madewithdativejs" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 bg-green-100 hover:text-white transition duration-300">GitHub</a>
					</div>
					<div class="md:hidden flex items-center">
						<button class="outline-none mobile-menu-button" on:click="navopen">
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
					</div>
				</div>
			</div>
			<div class="hidden mobile-menu" ref="menu">
				<ul class="">
					<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
					 
				</ul>
			</div></nav><hr /><br/><br /><br /><br />
			<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl px-1" id="projects">
			${
			  this.data.projects.map((project)=>{
			  return `<div class="md:flex px-4">
			   <a href="${project.link}" target="_blank">
			    <div class="md:flex-shrink-0">
			      <img class="h-48 w-full object-cover md:w-48" src="${project.image}" alt="${project.name}">
			    </div>
			    <div class="p-8">
			      <p class="inline-block bg-green-500 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${project.name.toLowerCase().split(' ').join('-')}</p>
			      <a href="${project.link}" target="_blank" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">${project.name}</a>
			      <p class="mt-2 text-gray-500">${project.description}</p>
			      <p>Created by <span class="mt-2 text-blue-500">${project.author || 'Anonymus'}</span></p>
			    </div>
			    </a>
			  </div><hr /><br />`			  
			  }).join('')
			  }
			</div><br /><br />
			<div class="md:flex-shrink-0 px-4 ">
			  <div class="shadow px-5 py-10">If you have any project <a class="text-blue-500" href="https://github.com/madewithdativejs/">made with DativeJs</a> fork the repository and create a pull request</div><br />
			  <div>Read the <a class="text-blue-500" href="terms.html">Terms and conditions</a></div>
			  <div class="shadow px-5 py-10">
			    © 2021-{{ date }} Made by <a class="text-blue-500" href="https://tobithedev.github.io/">Tobithedev</a>
			  </div>
			</div>
    `
  },
  methods:{
    navopen(){
      this.$ref.menu.classList.toggle("hidden")
    }
  },
  mounted(){
    fetch('projects.json')
      .then(res => res.json())
      .then(data=>{
        this.data.projects = data.projects;
      })
  }
})
app.render()
