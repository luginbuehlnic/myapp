sap.ui.define([
    "sap/ui/core/mvc/controller",
    "sap/m/MessageToast"
], function (controller, MessageToast) {
        "use strict";

    return controller.extend("opensap.myapp.controller.App", {
        onShowHello : function () {
            // read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);

            MessageToast.show (sMsg);
        }
    })
});