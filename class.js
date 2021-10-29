class EasyHttp{
 constructor(){
 this.secrets = "17c902929c94a20d029c3fb31a2a460ae705c5e5"
 this.id = "5fbcd6c510eff7478a07"
}
 async get (user){
     const promise = await fetch(`https://api.github.com/users/${user}?client_id=${this.id}&client_secret=${this.secrets}`)
          const data = await promise.json()
          return data
      
      
  }
 
    async _get(user) {
        const promise = await fetch(`https://api.github.com/users/${user}/repos?client_id=${this.id}&client_secret=${this.secrets}`)
        const data = await promise.json()
        return data
    }
}
class Ui{
    constructor(obj){
     this.obj = obj
    }
    clear(){
       if( document.querySelector(".danger")){
           document.querySelector(".danger").remove()
       }
    }
    async alt(){
        const div = document.createElement("div")
        div.innerText ="user not found"
        div.className="danger p-div"
        document.body.insertBefore(div,document.querySelector(".finder"))
        document.querySelector("button").disabled = true;
        document.querySelector("input").disabled = true;
        await new Promise((resolve)=>{
            setTimeout(() => {
                div.remove()
                resolve(); 
            }, 3000);
        })
        document.querySelector("button").disabled=false
        document.querySelector("input").disabled = false
    }
    url() {
        return (this.obj.html_url)
    }
    setData(){
        //elments
        
        //input
        const input = document.querySelector("input")     
        //div
        const div = document.querySelector(".repo")
        //img
        const img = document.querySelector("img")        
        //button
        const button = document.querySelector("button")
        //span
        const follower = document.querySelector(".followers")
        const following = document.querySelector(".following")
        const repo = document.querySelector(".repos")     
        const git = document.querySelector(".gits")     
        
        //p tags
        const website = document.querySelector(".website")
        const company = document.querySelector(".company")
        const location = document.querySelector(".location")
        const member = document.querySelector(".member")
        
        //removing repos
        div.innerHTML=""
        
        //seting repos
        const user =input.value;
        console.log(user);
        const rep =  new EasyHttp()
        rep._get(user).then((e)=>{
            console.log(e);
            if(e){
            for(let i =0;i<5;i++){
                if(e[i]){
                const name = e[i].full_name
                const p = document.createElement("p")
                p.append(name);
                div.appendChild(p)
                }
            }
        }
        })
        img.setAttribute("src", this.obj.avatar_url)
        
        //clearing span
        follower.textContent = ""
        following.innerHTML = ""
        repo.innerHTML= ""
        git.innerHTML = ""
        //seting span
        follower.textContent = "Followers : "+this.obj.followers;
        following.innerHTML = "Following : "+this.obj.following
        repo.innerHTML ="Public Repos : "+this.obj.public_repos
        git.innerHTML = "Public Gits : "+this.obj.public_gists
        
        //clearing p 
        website.innerHTML = ""
        company.innerHTML = ""
        location.innerHTML = ""
        member.innerHTML = ""
        //seting p tag
        website.innerHTML ="Website/blog : "+ this.obj.blog
        company.innerHTML +="Company : "+ this.obj.company
        location.innerHTML += "Location : "+this.obj.location
        member.innerHTML += "Member Science : "+this.obj.member
        
        //setting button


    }
}
