export class Activatus{
  canActivate(params, routeConfig, navigationInstruction) {
    console.log("======================================================================")
    console.log("Activatus!")
    console.log("======================================================================")
    console.log("params: ")
    console.log(params)
    console.log("routeConfig: ")
    console.log(routeConfig)
    console.log("navigationInstruction: ")
    console.log(navigationInstruction)
  }
}