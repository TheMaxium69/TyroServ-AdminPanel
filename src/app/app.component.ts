import { Component } from '@angular/core';
import {UserUseritiumApiInterface} from "./interface/user-useritium-api.interface";
import {UseritiumService} from "./service/useritium.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private useritiumService: UseritiumService) { }


  /******************************************************************************************************************
   *
   * VARIABLE GLOBAL
   *
   * ******************************************************************************************************************/


  AppEnv: string = "DEV"; // DEV or PROD

  /*URL API*/
  urlTyroServApi_Dev: string = "http://localhost/Api-GetTyroServ/";
  urlUseritiumApi_Dev: string = "http://127.0.0.1/ApiUsertium/";

  urlTyroServApi_Prod: string = "http://vps207.tyrolium.fr/api/";
  urlUseritiumApi_Prod: string = "https://useritium.fr/api-externe/";

  /*FUNCTIONNEMENT*/
  Debug:Boolean = true;
  isLog: boolean = false;
  userConnected: UserUseritiumApiInterface|undefined;
  curentDate: Date = new Date();

  /******************************************************************************************************************
   *
   * CONNEXION
   *
   * ******************************************************************************************************************/

  login(email:string, password:string){


    console.log(email)
    console.log(password)


    let bodyNoJson = {
      "email_auth": email,
      "mdp_auth": password,
    };

    let body = JSON.stringify(bodyNoJson);

    this.useritiumService.connection(body, this.setURL("useritum")).subscribe(reponse => {

      if (reponse.status == "true" && reponse.why == "successfully connected"){

        this.userConnected = reponse.result;

        this.isLog = true;

      } else {

        console.log(reponse.why);

      }

    })





  }



  /******************************************************************************************************************
   *
   * SATISTIQUE MINECRAFT
   *
   * ******************************************************************************************************************/

  statsType:any[] = [
    {
      "name":"Inventory",
      "type":"pickup",
    },
    {
      "name":"Block Miné",
      "type":"mineBlock",
    },
    {
      "name":"Item Utilisé",
      "type":"useItem",
    },
    {
      "name":"Item Crafter",
      "type":"craftItem",
    },
    {
      "name":"Item Droppé",
      "type":"drop",
    },
    {
      "name":"Entitée tuée",
      "type":"killEntity",
    }
  ]

  /*****************************************************************************************************************
   *
   * FUNCTION GLOBAL
   *
   * ******************************************************************************************************************/



  //SET URL API
  setURL(type:string):string {
    if (this.AppEnv == "DEV" && type == "useritum"){
      return this.urlUseritiumApi_Dev
    } else if (this.AppEnv == "DEV" && type == "tyroserv"){
      return this.urlTyroServApi_Dev
    } else if (this.AppEnv == "PROD" && type == "useritum") {
      return this.urlUseritiumApi_Prod
    } else {
      return this.urlTyroServApi_Prod
    }
  }

}
