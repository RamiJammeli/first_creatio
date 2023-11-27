define("UsrRealtyFreedomUI_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					}
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealtyFreedomUI"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "e63c8608-e465-4b25-9d6c-ce61c84f3be6",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_b30usnp",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_b30usnp_caption)#",
					"color": "default",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "menu"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_kzbg8vc",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_kzbg8vc_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalculateAveragePriceFreedom",
							"processRunType": "ForTheSelectedPage",
							"recordIdProcessParameterName": "RecordIdParameter"
						}
					},
					"icon": "pencil-button-icon"
				},
				"parentName": "Button_b30usnp",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_RunWebService",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_doh7gq5_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.SaveRecordRequest"
					},
					"icon": "pencil-button-icon"
				},
				"parentName": "Button_b30usnp",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PushButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_h11q9e9_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.PushButton"
					},
					"clickMode": "default",
					"layoutConfig": {}
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_xa60yj5",
					"labelPosition": "auto",
					"control": "$NumberAttribute_xa60yj5"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_wv5iluv",
					"labelPosition": "auto",
					"control": "$NumberAttribute_wv5iluv"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_lkvq4ze",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrOfferUsrCommissionPercent",
					"control": "$UsrOfferUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCommission",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.NumberAttribute_prhdr42",
					"labelPosition": "auto",
					"control": "$NumberAttribute_prhdr42",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "UsrTypeCombo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_sf6pav3",
					"labelPosition": "auto",
					"control": "$LookupAttribute_sf6pav3",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrRealtyOfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_6ssnzzm",
					"labelPosition": "auto",
					"control": "$LookupAttribute_6ssnzzm",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrComment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.StringAttribute_1r0kypj",
					"labelPosition": "auto",
					"control": "$StringAttribute_1r0kypj",
					"multiline": false,
					"visible": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "ComboBox_o1bpf23",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_wcol959",
					"labelPosition": "auto",
					"control": "$LookupAttribute_wcol959",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCountryCombo",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_7iox2lp",
					"labelPosition": "auto",
					"control": "$LookupAttribute_7iox2lp",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "addRecord_zfiixdv",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_zfiixdv_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCountryCombo",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrCityCombo",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.LookupAttribute_197k76q",
					"labelPosition": "auto",
					"control": "$LookupAttribute_197k76q",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_lknhi5c",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_lknhi5c_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrCityCombo",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_g1ge01j",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_g1ge01j_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_t5n7lm3",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g1ge01j",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_g9k6vu1",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_t5n7lm3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_q529ron",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_q529ron_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "FlexContainer_g9k6vu1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_w8tk7p2",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_w8tk7p2_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_iaac4fnDS"
						}
					}
				},
				"parentName": "FlexContainer_g9k6vu1",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_wsw428k",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_wsw428k_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_g9k6vu1",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_zdnl138",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_zdnl138_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_iaac4fn"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wsw428k",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_xll5vh8",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_xll5vh8_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_wsw428k",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_qahdgj1",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_qahdgj1_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_iaac4fn"
					]
				},
				"parentName": "FlexContainer_g9k6vu1",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_uh42a4l",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_g1ge01j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_iaac4fn",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_iaac4fn",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_iaac4fnDS_Id",
					"columns": [
						{
							"id": "bdb6ab6c-263f-de3b-c2be-ab7d86a75c93",
							"code": "GridDetail_iaac4fnDS_UsrComment",
							"caption": "#ResourceString(GridDetail_iaac4fnDS_UsrComment)#",
							"dataValueType": 28
						},
						{
							"id": "5e7d0133-293e-3dd4-8f1b-ef7d33fda5ff",
							"code": "GridDetail_iaac4fnDS_UsrPotentialCustomer",
							"path": "UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_iaac4fnDS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"referenceSchemaName": "Contact"
						},
						{
							"id": "9851778f-ec44-5756-a61f-18c69e201789",
							"code": "GridDetail_iaac4fnDS_UsrVisitDateTime",
							"path": "UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_iaac4fnDS_UsrVisitDateTime)#",
							"dataValueType": 7
						}
					]
				},
				"parentName": "GridContainer_uh42a4l",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"NumberAttribute_xa60yj5": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1000,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"NumberAttribute_wv5iluv": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(AreaCannotBeLess)#"
								}
							}
						}
					},
					"LookupAttribute_sf6pav3": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"LookupAttribute_6ssnzzm": {
						"modelConfig": {
							"path": "PDS.UsrOffer"
						}
					},
					"StringAttribute_1r0kypj": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"LookupAttribute_wcol959": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"LookupAttribute_7iox2lp": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"LookupAttribute_197k76q": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"NumberAttribute_prhdr42": {
						"modelConfig": {
							"path": "PDS.UsrComission"
						}
					},
					"UsrOfferUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferUsrCommissionPercent"
						}
					},
					"GridDetail_iaac4fn": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_iaac4fnDS"
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_iaac4fnDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_iaac4fnDS.UsrComment"
									}
								},
								"GridDetail_iaac4fnDS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_iaac4fnDS.UsrPotentialCustomer"
									}
								},
								"GridDetail_iaac4fnDS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_iaac4fnDS.UsrVisitDateTime"
									}
								},
								"GridDetail_iaac4fnDS_Id": {
									"modelConfig": {
										"path": "GridDetail_iaac4fnDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealtyFreedomUI",
							"attributes": {
								"UsrOfferUsrCommissionPercent": {
									"path": "UsrOffer.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_iaac4fnDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisitFreedomUI",
							"attributes": {
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[

			{

				request: "usr.PushButton",

				/* Implementation of the custom query handler. */

				handler: async (request, next) => {

					this.console.log("Button works...");

					Terrasoft.showInformation("My button was pressed.");

					var price = await request.$context.NumberAttribute_xa60yj5;

					this.console.log("Price = " + price);

					if (price === 2000) {
						request.$context.enableAttributeValidator('NumberAttribute_xa60yj5', 'required');
					} else {
						request.$context.disableAttributeValidator('NumberAttribute_xa60yj5', 'required');
					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);
				}
			},

			{

				request: "crt.HandleViewModelAttributeChangeRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("***********" + request.attributeName);
					if (request.attributeName == "NumberAttribute_xa60yj5" || request.attributeName == "UsrOfferUsrCommissionPercent") {
						var price = await request.$context.NumberAttribute_xa60yj5;
						this.console.log("Price = " + price);

						var commissionPercent = await request.$context.UsrOfferUsrCommissionPercent;

						request.$context.NumberAttribute_prhdr42 = price * commissionPercent / 100;
					}

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},

			//web service call
			{
				request: "usr.SaveRecordRequest",
				/* Implementation of the custom query handler. */

				handler: async (request, next) => {
					this.console.log("Run web service button works...");

					var typeObject = await request.$context.LookupAttribute_sf6pav3;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
					// get id from type lookup type object
					var offerTypeObject = await request.$context.LookupAttribute_6ssnzzm;
					var offerTypeId = "";
					if (offerTypeObject) {
						offerTypeId = offerTypeObject.value;
					}

					// get id from type lookup offer type object
					/* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */
					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "UsrRealtyWS";
					const methodName = "GetTotalAmountByTypeId";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					//const endpoint = "http://localhost/D5_8.0.8.4758/0/rest/RealtyService/GetTotalAmountByTypeId";

					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */

					var params = {
						realtyTypeId: typeId,
						realtyOfferTypeId: offerTypeId,
						entityName: "UsrRealtyFreedomUI"
					};

					const response = await httpClientService.post(endpoint, params);

					this.console.log("response total price = " + response.body.GetTotalAmountByTypeIdResult);

					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);

				}

			},

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: {
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": {
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}
	};
});