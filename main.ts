/// <reference path="hitbtc.ts" />
/// <reference path="atlasats.ts" />
/// <reference path="ui.ts" />
/// <reference path="broker.ts" />
/// <reference path="agent.ts" />

var gateways : Array<IGateway> = [new AtlasAts.AtlasAts(), new HitBtc.HitBtc()];
//var gateways : Array<IGateway> = [new AtlasAts.AtlasAts()];
var brokers : Array<IBroker> = gateways.map(g => new ExchangeBroker(g));
var ui = new UI(brokers);
var orderAgg = new OrderBrokerAggregator(brokers, ui);
var agent = new Agent(orderAgg.brokers(), ui);