import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  /******************************************************************************************************************
   *
   * VARIABLE GLOBAL
   *
   * ******************************************************************************************************************/


  AppEnv: string = "DEV"; // DEV or PROD

  /*URL API*/
  urlTyroServApi_Dev: string = "http://localhost/Api-GetTyroServ/";
  urlUseritiumApi_Dev: string = "http://localhost/ApiUsertium/";

  urlTyroServApi_Prod: string = "http://vps207.tyrolium.fr/api/";
  urlUseritiumApi_Prod: string = "https://useritium.fr/api-externe/";

  /*FUNCTIONNEMENT*/
  isLog: boolean = false;
  Debug:Boolean = true;
  curentDate: Date = new Date();

  /******************************************************************************************************************
   *
   * CONNEXION
   *
   * ******************************************************************************************************************/





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
