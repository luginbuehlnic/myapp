sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/model/formatter"
], function (Controller,
	MessageToast, Filter , FilterOperator,
	formatter) {
	"use strict";

    return Controller.extend("opensap.myapp.controller.App", {

		formatter : formatter,
		onShowHello : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient = this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);

			// show message
			MessageToast.show(sMsg);
		},

		onItemSelected: function(oEvent){
			var oSelectedItem = oEvent.getSource();
			var oContext = oSelectedItem.getBindingContext();
			var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("productDetailsPanel");

			oProductDetailPanel.bindElement({ path : sPath});
			this.byId("productDetailsPanel").setVisible(true);
		},

		onFilterProducts : function (oEvent) {

			var aFilter = [], sQuery = oEvent.getParameter("query"),
			oList = this.getView().byId("productsList"),
			oBinding = oList.getBinding("items");

			if (sQuery){
					aFilter.push(new Filter("ProductID", FilterOperator.Contains, sQuery));
					//aFilter.push(new Filter("Category", FilterOperator.Contains, sQuery));
			}
			oBinding.filter(aFilter);
		},
		onSave : function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sMsg = oBundle.getText("saveMsg");

			if(this.byId("userInfoPanel").isVisible = 'true'){
				print('');
			} else {
				// show message
				MessageToast.show(sMsg);
			}
			
		},

		onShow : function(oEvent){
			// print('Hallo');
			var oSelectedItem = oEvent.getSource();
			// var oContext = oSelectedItem.getBindingContext();
			// var sPath = oContext.getPath();
			var oProductDetailPanel = this.byId("userInfoPanel");

			// oProductDetailPanel.bindElement({ path : sPath});
			if(oProductDetailPanel.visibility == "true"){
				console.log('nei');
				this.byId("userInfoPanel").setVisible(false);
			} else {
				console.log('ja');
				this.byId("userInfoPanel").setVisible(true);
			}
			
		},

	});
});
