<template>
    <div id="Profil" class="ProfilComp bg-background" style="display:none">
        <div class="content">
          <div class="tabProfil">
            <div class="row" style="margin-bottom:3rem;">
                <ul class="flex border-b">
                  <li class="button-tab tabActive" @click="switchTab($event)">
                    <button class="bg-white py-2 px-2 inline-block text-blue-700 font-semibold" id="buttonIdentifiant">Paramètres identifiants</button>
                  </li>
                  <li class="button-tab" @click="switchTab($event)">
                    <button class="bg-white py-2 px-2 inline-block text-blue-500 hover:text-blue-800 font-semibold" id="buttonCrypto">Paramètres Crypto</button>
                  </li>
                  <li class="button-tab" @click="switchTab($event)">
                    <button class="bg-white py-2 px-2 inline-block text-blue-500 hover:text-blue-800 font-semibold" id="buttonPress">Paramètres Press</button>
                  </li>
                </ul>
            </div>

            <div id="tabIdentifiants">
              <div class="wrapper">
              <img class="profilPic" src="https://cdn.icon-icons.com/icons2/1769/PNG/512/4092564-about-mobile-ui-profile-ui-user-website_114033.png">
              </div>
              <form class="space-y-6" action="#" method="POST">
                  <div class="mb-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                      Username
                    </label>
                    <input
                        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email" placeholder="*****@****">
                  </div>
                  <div class="mb-6">
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                      Password
                    </label>
                    <input
                        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" type="password" placeholder="************">
                  </div>
                  <div class="flex flex-row justify-center">
                    <div class="w-1/2">
                      <button @click="saveChanges"
                              class="group relative bg-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save changes
                      </button>
                    </div>
                  </div>
              </form>
            </div>
            <div id="tabCrypto" style="display:none">

              <form id="formCrypto" class="space-y-6" action="#" method="POST">
                <select id="selectCrypto" class="w-1/2">
                  <option value="dollars">Dollars</option>
                  <option value="euro">Euro</option>
                  <option value="bitcoin">Bitcoin</option>
                  <option value="dogecoin">Dogecoin</option>
                </select>
                <div id="exDivCrypto" class="cryptoRow flex flex-row" style="display:none">
                  <div class="cryptoAjoute w-3/4"></div>
                  <a class="rmvCrypto w-1/4"><img src="https://www.pinclipart.com/picdir/big/214-2145896_clipart-transparent-download-file-oxygen-wikimedia-delete-system.png"/></a>
                </div>
                <a class="addButton" @click="addCrypto()">
                  <img src="https://www.pinclipart.com/picdir/big/8-80725_how-to-set-use-add-button-white-svg.png" />
                </a>
                <div class="flex flex-row justify-center">
                  <div class="w-1/2">
                    <button @click="saveChanges"
                            class="group relative bg-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>              

            </div>
            <div id="tabPress" style="display:none">

              <form id="formPress" class="space-y-6" action="#" method="POST">
                <label class="w-1/4">Add a filter</label>
                <input id="inputPress" type="text" class="filterBar w-2/4"/>
                <div id="exDivPress" class="pressRow flex flex-row" style="display:none">
                  <div class="pressAjoute w-3/4"></div>
                  <a class="rmvPress w-1/4"><img src="https://www.pinclipart.com/picdir/big/214-2145896_clipart-transparent-download-file-oxygen-wikimedia-delete-system.png"/></a>
                </div>
                <a class="addButton">
                  <img @click="addPress()" src="https://www.pinclipart.com/picdir/big/8-80725_how-to-set-use-add-button-white-svg.png" />
                </a>                  
                <div class="flex flex-row justify-center">
                  <div class="w-1/2">
                    <button @click="saveChanges"
                            class="group relative bg-white w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Save changes
                    </button>
                  </div>
                </div>
              </form>

            </div>

          </div>
        </div>
    </div>
</template>

<script>


export default {
  name: "ProfilComponent",
  methods: {
    sendChangeParam() {
      
    },
    saveChanges(){

    },
    switchTab(event){
      document.getElementsByClassName("tabActive")[0].classList.toggle("tabActive");
      switch (event.target.id) {
          case "buttonIdentifiant" :
            document.getElementById("buttonIdentifiant").parentNode.classList.toggle("tabActive");
            document.getElementById("tabIdentifiants").style.display = "";
            document.getElementById("tabCrypto").style.display = "none";
            document.getElementById("tabPress").style.display = "none";
          break;

          case "buttonCrypto" :
            document.getElementById("buttonCrypto").parentNode.classList.toggle("tabActive");
            document.getElementById("tabIdentifiants").style.display = "none";
            document.getElementById("tabCrypto").style.display = "";
            document.getElementById("tabPress").style.display = "none";
          break;

          case "buttonPress" :
            document.getElementById("buttonPress").parentNode.classList.toggle("tabActive");
            document.getElementById("tabIdentifiants").style.display = "none";
            document.getElementById("tabCrypto").style.display = "none";
            document.getElementById("tabPress").style.display = "";            
          break;

        default:
          console.log(event.target.id);
          break;
      }
    },
    addCrypto(){
      var nomCrypto = document.getElementById("selectCrypto").value;
      if(document.getElementById("id_" + nomCrypto) != undefined){
        alert("This Crypto is already followed");
      }else{
      var srcDiv = document.getElementById("exDivCrypto");
      var newCrypto = srcDiv.cloneNode([true]);
      newCrypto.setAttribute("style", "display=''");
      newCrypto.setAttribute("id", "row_id_" + nomCrypto);
      var divCrypto = newCrypto.childNodes[0]
      var rmvCrypto = newCrypto.childNodes[1].childNodes[0];
      rmvCrypto.id = "rmv_" + nomCrypto;
      rmvCrypto.onclick = function(event){
        event.target.parentElement.parentElement.remove()
      }
      divCrypto.setAttribute("id", "id_" + nomCrypto);
      divCrypto.innerHTML = nomCrypto;
      const formCrypto = document.getElementById("formCrypto");
      var lengthForm = formCrypto.childNodes.length - 2
      formCrypto.insertBefore(newCrypto, formCrypto.childNodes[lengthForm]);
      }
    },
    addPress(){
      var nomPress = document.getElementById("inputPress").value;
      if(document.getElementById("id_" + nomPress) != undefined){
        alert("This filter is already set");
      }else{
        if(nomPress == ""){
          alert("Please enter something in the filter field");
        }else{
          var srcDiv = document.getElementById("exDivPress");
          var newPress = srcDiv.cloneNode([true]);
          newPress.setAttribute("style", "display=''");
          newPress.setAttribute("id", "row_id_" + nomPress);
          var divPress = newPress.childNodes[0]
          var rmvPress = newPress.childNodes[1].childNodes[0];
          rmvPress.id = "rmv_" + nomPress;
          rmvPress.onclick = function(event){
            event.target.parentElement.parentElement.remove()
          }
          divPress.setAttribute("id", "id_" + nomPress);
          divPress.innerHTML = nomPress;
          const formPress = document.getElementById("formPress");
          var lengthForm = formPress.childNodes.length - 2
          formPress.insertBefore(newPress, formPress.childNodes[lengthForm]);
        }
      }
    },
  },
  mounted() {
  }
}
</script>

<style scoped>
.ProfilComp{
    width: 40%;
    margin: 2%;
    position: absolute;
    right: 0;
    border: #FCAF3E solid 4px;
    border-radius: 5px;
    height: 40rem;

}

.button-tab{
  /* margin: 2%; */
  width: 33%;
  text-align: center;
}

.tabActive{
  border: 1px white solid;
  border-bottom: 0px;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}

#selectCrypto{
  color:black;
  font-weight: 600;
}

#selectCrypto option{
  color:black;
  font-weight: 600;
}

.addButton img{
  width: 2.25rem;
  border: 1px white solid;
  padding: 0.25rem;
  border-radius: 5rem;
}

.cryptoRow{
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.cryptoAjoute{
  border: 2px solid white;
  color:black;
  background: #FCAF3E;
  font-weight: 600;
  text-align: left;
  text-transform: capitalize;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  border-radius: 5rem;
}

.rmvCrypto{
  color: black;
}

.rmvCrypto img{
  width: 2rem;
  margin-left: 2rem;
}



#addPress img{
  width: 2.25rem;
  border: 1px white solid;
  padding: 0.25rem;
  border-radius: 5rem;
}

.pressRow{
  margin-top: 1.5rem !important;
  margin-bottom: 1.5rem !important;
}

.pressAjoute{
  border: 2px solid white;
  color:black;
  background: #FCAF3E;
  font-weight: 600;
  text-align: left;
  text-transform: full-width;
  padding-left: 0.5rem;
  padding-top: 0.2rem;
  border-radius: 5rem;
}

.rmvPress{
  color: black;
}

.rmvPress img{
  width: 2rem;
  margin-left: 2rem;
}

.filterBar{
  background: white;
  color: black;
  margin-left: 1rem;
}

.content{
    margin: 10%;
}

html {
  background: #333;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
}

.profilPic{
    width:20%;
    
}

.wrapper {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
}

.title {
  width: 21ch;
  overflow: hidden;
  color: white;
  white-space: nowrap;
  border-right: 4px solid orange;
  animation: printed-text 3s steps(21),
  flashin-border .9s step-start infinite;
}


</style>