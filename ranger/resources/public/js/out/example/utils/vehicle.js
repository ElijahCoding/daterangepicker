// Compiled by ClojureScript 1.10.339 {}
goog.provide('example.utils.vehicle');
goog.require('cljs.core');
example.utils.vehicle.sample_vehicle_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"count","count",2139924085),(8),new cljs.core.Keyword(null,"next","next",-117701485),null,new cljs.core.Keyword(null,"previous","previous",-720163404),null,new cljs.core.Keyword(null,"results","results",-1134170113),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["1","unknown","X-34 landspeeder","1","2014-12-10T16:13:52.586000Z","2014-12-22T18:21:15.583700Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/1/"], null),"https://swapi.co/api/vehicles/7/","3.4","repulsorcraft","SoroSuub Corporation","250",cljs.core.PersistentVector.EMPTY,"10550","5","X-34 landspeeder"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["0","none","Snowspeeder","2","2014-12-15T12:22:12Z","2014-12-22T18:21:15.623033Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/2/"], null),"https://swapi.co/api/vehicles/14/","4.5","airspeeder","Incom corporation","650",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/1/","https://swapi.co/api/people/18/"], null),"unknown","10","t-47 airspeeder"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["1","1 day","Imperial Speeder Bike","1","2014-12-18T11:20:04.625000Z","2014-12-22T18:21:15.920537Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/3/"], null),"https://swapi.co/api/vehicles/30/","3","speeder","Aratech Repulsor Company","360",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/1/","https://swapi.co/api/people/5/"], null),"8000","4","74-Z speeder bike"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["0","unknown","Sith speeder","1","2014-12-20T10:09:56.095000Z","2014-12-22T18:21:16.095041Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/4/"], null),"https://swapi.co/api/vehicles/42/","1.5","speeder","Razalon","180",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/44/"], null),"4000","2","FC-20 speeder bike"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["1","unknown","Koro-2 Exodrive airspeeder","1","2014-12-20T17:17:33.526000Z","2014-12-22T18:21:16.140018Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/5/"], null),"https://swapi.co/api/vehicles/45/","6.6","airspeeder","Desler Gizh Outworld Mobility Corporation","800",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/70/"], null),"unknown","80","Koro-2 Exodrive airspeeder"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["1","unknown","XJ-6 airspeeder","1","2014-12-20T17:19:19.991000Z","2014-12-22T18:21:16.150194Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/5/"], null),"https://swapi.co/api/vehicles/46/","6.23","airspeeder","Narglatch AirTech prefabricated kit","720",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/11/"], null),"unknown","unknown","XJ-6 airspeeder"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["0","unknown","Flitknot speeder","1","2014-12-20T18:15:20.312000Z","2014-12-22T18:21:16.335005Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/5/"], null),"https://swapi.co/api/vehicles/55/","2","speeder","Huppla Pasa Tisc Shipwrights Collective","634",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/people/67/"], null),"8000","unknown","Flitknot speeder"]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"passengers","passengers",-257747902),new cljs.core.Keyword(null,"consumables","consumables",1219001670),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"crew","crew",63677131),new cljs.core.Keyword(null,"created","created",-704993748),new cljs.core.Keyword(null,"edited","edited",-262616624),new cljs.core.Keyword(null,"films","films",2144057874),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"vehicle_class","vehicle_class",-677517961),new cljs.core.Keyword(null,"manufacturer","manufacturer",-1612823432),new cljs.core.Keyword(null,"max_atmosphering_speed","max_atmosphering_speed",-1765291844),new cljs.core.Keyword(null,"pilots","pilots",353525853),new cljs.core.Keyword(null,"cost_in_credits","cost_in_credits",-302473507),new cljs.core.Keyword(null,"cargo_capacity","cargo_capacity",614099359),new cljs.core.Keyword(null,"model","model",331153215)],["unknown","unknown","Emergency Firespeeder","2","2014-12-20T19:50:58.559000Z","2014-12-22T18:21:16.450655Z",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["https://swapi.co/api/films/6/"], null),"https://swapi.co/api/vehicles/62/","unknown","fire suppression ship","unknown","unknown",cljs.core.PersistentVector.EMPTY,"unknown","unknown","Fire suppression speeder"])], null)], null);

//# sourceMappingURL=vehicle.js.map?rel=1542224118147