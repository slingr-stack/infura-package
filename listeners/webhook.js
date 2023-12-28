/****************************************************
 Listeners
 ****************************************************/

listeners.defaultWebhookInfura = {
    label: 'Catch HTTP infura events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/infura',
        }
    },
    callback: function(event) {
        sys.logs.info('Received Infura webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('infura:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
