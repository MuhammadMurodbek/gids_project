import {
  external, 
  aliReducer, 
  reducers, 
  postPhoneNumber, 
  postRegReducer, 
  postSMS_Reducer,
  get_Organisation_All_Reducer,
  post_Org_Create_Reducer,
  get_Org_Data_Id_Reducer,
  delete_Org_Id_Reducer,
  update_Org_Data_Id_Reducer,
  get_Loyal_Reducer,
  set_Loyal_Reducer,
  post_Device_Create_Reducer,
  get_Device_Paging_Reducer,
  get_Device_By_Id_Reducer,
  update_Device_By_Id_Reducer,
  get_Feature_Data_Reducer,
  get_Payment_All_Reducer,
  post_Payment_Create_Reducer,
  get_Payment_By_Id_Reducer,
  update_Payment_Data_Reducer,
  set_Features_Reducer,
  delete_Device_Many_Reducer,
  delete_Payment_Many_Reducer,
  create_HR_Schedule_Reducer,
  delete_HR_Schedule_Reducer,
  get_All_HR_Schedule_Reducer,
  get_ById_HR_Schedule_Reducer,
  get_For_CHoose_Schedule_Reducer,
  update_Schedule_Reducer,
  create_HR_Section_Reducer,
  delete_HR_Section_Reducer,
  get_Paging_HR_Section_Reducer,
  get_ById_HR_Section_Reducer,
  get_For_Choose_Section_Reducer,
  update_Section_Reducer,
  create_HR_Position_Reducer,
  delete_HR_Position_Reducer,
  get_For_Choose_Position_Reducer,
  get_ById_HR_Position_Reducer,
  update_Position_Reducer,
  delete_Many_HR_Section_Reducer,
  get_Paging_HR_Employee_Reducer,
  get_Paging_Position_Reducer,
  create_Finance_Currency_Reducer,
  delete_Finance_Currency_Reducer,
  get_All_Finance_Currency_Reducer,
  get_ById_Finance_Currency_Reducer,
  update_Finance_Currency_Reducer,
  create_Finance_Taxs_Reducer,
  delete_Finance_Taxs_Reducer,
  get_All_Finance_Taxs_Reducer,
  get_ById_Finance_Taxs_Reducer,
  update_Finance_taxs_Reducer,
  create_WareHouse_Category_Reducer,
  delete_WareHouse_Category_Reducer,
  get_ById_WareHouse_Category_Reducer,
  get_For_Choose_WareHouse_Category_Reducer,
  get_Paging_WareHouse_Category_Reducer,
  update_WareHouse_category_Reducer,
  create_WareHouse_Active_Reducer,
  delete_WareHouse_Active_Reducer,
  get_ById_WareHouse_Active_Reducer,
  get_Paging_WareHouse_Active_Reducer,
  create_WareHouse_Supplier_Reducer,
  delete_WareHouse_Supplier_Reducer,
  get_ById_WareHouse_Supplier_Reducer,
  get_For_Choose_WareHouse_Supplier_Reducer,
  get_Paging_WareHouse_Supplier_Reducer,
  update_WareHouse_Supplier_Reducer,
  get_For_Choose_Employee_Reducer,
  create_HR_Employee_Reducer,
  delete_HR_Employee_Reducer,
  update_Employee_Reducer,
  get_ById_HR_Employee_Reducer,
  create_Products_product_Reducer,
  delete_Products_Product_Reducer,
  get_ById_Products_Product_Reducer,
  get_For_Choose_Products_Product_Reducer,
  get_Paging_Products_Product_Reducer,
  update_Products_Product_Reducer,
  create_Products_Category_Reducer,
  delete_Products_Category_Reducer,
  get_ById_Products_Category_Reducer,
  get_For_Choose_Products_Category_Reducer,
  update_Products_Category_Reducer,
  create_Products_Income_Reducer,
  get_ById_Products_Income_Reducer,
  get_Paging_Products_Income_Reducer,
  create_Products_Transfer_Reducer,
  cancel_Products_Transfer_Reducer,
  get_ById_Products_Transfer_Reducer,
  get_Paging_Products_Transfer_Reducer,
  receive_Choose_Products_Transfer_Reducer,
  update_Products_Transfer_Reducer,
  create_Products_Order_Reducer,
  cancel_Products_Order_Reducer,
  update_Products_Order_Reducer,
  get_ById_Products_Order_Reducer,
  get_Paging_Products_Order_Reducer,
  receive_Choose_Products_Order_Reducer,
  get_Paging_Products_Category_Reducer,
  create_WareHouse_Material_Reducer,
  delete_Many_WareHouse_Material_Reducer,
  delete_WareHouse_Material_Reducer,
  get_ById_WareHouse_Material_Reducer,
  get_For_Choose_WareHouse_Material_Reducer,
  get_Paging_WareHouse_Material_Reducer,
  update_WareHouse_Material_Reducer,
  create_Products_Income_AutoComplete_Reducer,
  create_Choose_For_Income_Reducer,
  create_Products_Return_Reducer,
  choose_For_Return_Products_Reducer,
  get_ById_Products_Return_Reducer,
  get_Paging_Products_Return_Reducer,
  create_Products_Order_AutoComplete_Reducer,
  choose_for_return_if_organization_Reducer,
  choose_For_Transfer_Reducer,
  transfer_Autocomplete_Reducer,
  create_WareHouse_Income_Reducer,
  get_ById_WareHouse_Income_Reducer,
  get_Paging_WareHouse_Income_Reducer,
  choose_For_Income_Warehouse_Reducer,
  income_Autocomplete_Warehouse_Reducer,
  common_header_reducer,
  create_Warehouse_Material_Transfer_Reducer,
  cancel_Warehouse_Material_Transfer_Reducer,
  choose_For_Transfer_Warehouse_Material_Reducer,
  get_ById_Warehouse_Material_Transfer_Reducer,
  receive_warehouse_material_transfer_Reducer,
  create_Warehouse_Material_Order_Reducer,
  get_ById_Warehouse_Material_Order_Reducer,
  get_Paging_Warehouse_Material_Order_Reducer,
  choose_For_Order_Warehouse_Material_Reducer,
  update_Status_Warehouse_Reducer_Order_Reducer,
  update_Warehouse_Material_Order_Reducer,
  order_Autocomplete_Warehouse_Material_Reducer,
  get_Paging_Warehouse_Material_Transfer_Reducer,
  create_Warehouse_Material_Return_Reducer,
  get_ById_Warehouse_Material_Return_Reducer,
  get_Paging_Warehouse_Material_Return_Reducer,
  choose_For_Return_Warehouse_Material_Reducer,
  choose_For_Return_Organization_Warehouse_Material_Reducer,
  create_Sale_Customer_Reducer,
  get_ById_Sale_Customer_Reducer,
  get_Paging_Sale_Customer_Reducer,
  update_Sale_Customer_Reducer,
  create_Sale_Discount_Reducer,
  get_ById_Sale_Discount_Reducer,
  get_Paging_Sale_Discount_Reducer,
  update_Sale_Discount_Reducer,
  create_Sale_Cross_Sell_Reducer,
  get_ById_Sale_Cross_Sell_Reducer,
  get_Paging_Sale_Cross_Sell_Reducer,
  update_Sale_Cross_Sell_Reducer,
  create_Sale_Offer_Reducer,
  get_ById_Sale_Offer_Reducer,
  get_Paging_Sale_Offer_Reducer,
  update_Sale_Offer_Reducer,
  counter_Get_Sale_Offer_Reducer,
  get_Available_Cross_Sells_Get_Sale_Offer_Reducer,
  get_For_Offer_Sale_Reducer,
  create_Production_Process_Reducer,
  get_ById_Production_Process_Reducer,
  get_Paging_Production_Process_Reducer,
  update_Production_Process_Reducer,
  update_WareHouse_Active_Reducer,
  update_Warehouse_Material_Transfer_Reducer,
  create_Sale_Order_Reducer,
  get_ById_Sale_Order_Reducer,
  update_Sale_Order_Reducer,
  get_Paging_Sale_Order_Reducer,
  create_Sale_Contract_Reducer,
  get_Paging_Sale_Contract_Reducer,
  get_ById_Sale_Contract_Reducer,
  delete_Sale_Contract_Reducer,
  get_by_Number_Sale_Offer_Reducer
  
} from "./export"
import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from "redux-thunk"

const allReducers = combineReducers({
  reducers,
  aliReducer,
  external,
  postPhoneNumber,
  postRegReducer,
  postSMS_Reducer,
  get_Organisation_All_Reducer,
  post_Org_Create_Reducer,
  get_Org_Data_Id_Reducer,
  delete_Org_Id_Reducer,
  update_Org_Data_Id_Reducer,
  get_Loyal_Reducer,
  set_Loyal_Reducer,
  post_Device_Create_Reducer,
  get_Device_Paging_Reducer,
  get_Device_By_Id_Reducer,
  update_Device_By_Id_Reducer,
  get_Feature_Data_Reducer,
  get_Payment_All_Reducer,
  post_Payment_Create_Reducer,
  get_Payment_By_Id_Reducer,
  update_Payment_Data_Reducer,
  set_Features_Reducer,
  delete_Device_Many_Reducer,
  delete_Payment_Many_Reducer,
  create_HR_Schedule_Reducer,
  delete_HR_Schedule_Reducer,
  get_All_HR_Schedule_Reducer,
  get_ById_HR_Schedule_Reducer,
  get_For_CHoose_Schedule_Reducer,
  update_Schedule_Reducer,
  create_HR_Section_Reducer,
  delete_HR_Section_Reducer,
  get_Paging_HR_Section_Reducer,
  get_ById_HR_Section_Reducer,
  get_For_Choose_Section_Reducer,
  update_Section_Reducer,
  create_HR_Position_Reducer,
  delete_HR_Position_Reducer,
  get_For_Choose_Position_Reducer,
  get_ById_HR_Position_Reducer,
  update_Position_Reducer,
  delete_Many_HR_Section_Reducer,
  get_Paging_HR_Employee_Reducer,
  get_Paging_Position_Reducer,
  create_Finance_Currency_Reducer,
  delete_Finance_Currency_Reducer,
  get_All_Finance_Currency_Reducer,
  get_ById_Finance_Currency_Reducer,
  update_Finance_Currency_Reducer,
  create_Finance_Taxs_Reducer,
  delete_Finance_Taxs_Reducer,
  get_All_Finance_Taxs_Reducer,
  get_ById_Finance_Taxs_Reducer,
  update_Finance_taxs_Reducer,
  create_WareHouse_Category_Reducer,
  delete_WareHouse_Category_Reducer,
  get_ById_WareHouse_Category_Reducer,
  get_For_Choose_WareHouse_Category_Reducer,
  get_Paging_WareHouse_Category_Reducer,
  update_WareHouse_category_Reducer,
  create_WareHouse_Active_Reducer,
  update_Products_Order_Reducer,
  delete_WareHouse_Active_Reducer,
  get_ById_WareHouse_Active_Reducer,
  get_Paging_WareHouse_Active_Reducer,
  create_WareHouse_Supplier_Reducer,
  delete_WareHouse_Supplier_Reducer,
  get_ById_WareHouse_Supplier_Reducer,
  get_For_Choose_WareHouse_Supplier_Reducer,
  get_Paging_WareHouse_Supplier_Reducer,
  update_WareHouse_Supplier_Reducer,
  get_For_Choose_Employee_Reducer,
  create_HR_Employee_Reducer,
  delete_HR_Employee_Reducer,
  update_Employee_Reducer,
  get_ById_HR_Employee_Reducer,
  create_Products_product_Reducer,
  delete_Products_Product_Reducer,
  get_ById_Products_Product_Reducer,
  get_For_Choose_Products_Product_Reducer,
  get_Paging_Products_Product_Reducer,
  update_Products_Product_Reducer,
  create_Products_Category_Reducer,
  delete_Products_Category_Reducer,
  get_ById_Products_Category_Reducer,
  get_For_Choose_Products_Category_Reducer,
  update_Products_Category_Reducer,
  create_Products_Income_Reducer,
  get_ById_Products_Income_Reducer,
  get_Paging_Products_Income_Reducer,
  create_Products_Transfer_Reducer,
  cancel_Products_Transfer_Reducer,
  get_ById_Products_Transfer_Reducer,
  get_Paging_Products_Transfer_Reducer,
  receive_Choose_Products_Transfer_Reducer,
  update_Products_Transfer_Reducer,
  create_Products_Order_Reducer,
  cancel_Products_Order_Reducer,
  get_ById_Products_Order_Reducer,
  get_Paging_Products_Order_Reducer,
  receive_Choose_Products_Order_Reducer,
  get_Paging_Products_Category_Reducer,
  create_WareHouse_Material_Reducer,
  delete_Many_WareHouse_Material_Reducer,
  delete_WareHouse_Material_Reducer,
  get_ById_WareHouse_Material_Reducer,
  get_For_Choose_WareHouse_Material_Reducer,
  get_Paging_WareHouse_Material_Reducer,
  update_WareHouse_Material_Reducer,
  create_Products_Income_AutoComplete_Reducer,
  create_Choose_For_Income_Reducer,
  create_Products_Return_Reducer,
  choose_For_Return_Products_Reducer,
  get_ById_Products_Return_Reducer,
  get_Paging_Products_Return_Reducer,
  create_Products_Order_AutoComplete_Reducer,
  choose_for_return_if_organization_Reducer,
  choose_For_Transfer_Reducer,
  transfer_Autocomplete_Reducer,
  create_WareHouse_Income_Reducer,
  get_ById_WareHouse_Income_Reducer,
  get_Paging_WareHouse_Income_Reducer,
  choose_For_Income_Warehouse_Reducer,
  income_Autocomplete_Warehouse_Reducer,
  common_header_reducer,
  create_Warehouse_Material_Transfer_Reducer,
  cancel_Warehouse_Material_Transfer_Reducer,
  choose_For_Transfer_Warehouse_Material_Reducer,
  get_ById_Warehouse_Material_Transfer_Reducer,
  receive_warehouse_material_transfer_Reducer,
  create_Warehouse_Material_Order_Reducer, 
  get_ById_Warehouse_Material_Order_Reducer,
  get_Paging_Warehouse_Material_Order_Reducer,
  choose_For_Order_Warehouse_Material_Reducer,
  update_Status_Warehouse_Reducer_Order_Reducer,
  update_Warehouse_Material_Order_Reducer,
  order_Autocomplete_Warehouse_Material_Reducer,
  get_Paging_Warehouse_Material_Transfer_Reducer,
  create_Warehouse_Material_Return_Reducer,
  get_ById_Warehouse_Material_Return_Reducer,
  get_Paging_Warehouse_Material_Return_Reducer,
  choose_For_Return_Warehouse_Material_Reducer,
  choose_For_Return_Organization_Warehouse_Material_Reducer,
  create_Sale_Customer_Reducer,
  get_ById_Sale_Customer_Reducer,
  get_Paging_Sale_Customer_Reducer,
  update_Sale_Customer_Reducer,
  create_Sale_Discount_Reducer,
  get_ById_Sale_Discount_Reducer,
  get_Paging_Sale_Discount_Reducer,
  update_Sale_Discount_Reducer,
  create_Sale_Cross_Sell_Reducer,
  get_ById_Sale_Cross_Sell_Reducer,
  get_Paging_Sale_Cross_Sell_Reducer,
  update_Sale_Cross_Sell_Reducer,
  create_Sale_Offer_Reducer,
  get_ById_Sale_Offer_Reducer,
  get_Paging_Sale_Offer_Reducer,
  update_Sale_Offer_Reducer,
  counter_Get_Sale_Offer_Reducer,
  get_Available_Cross_Sells_Get_Sale_Offer_Reducer,
  get_For_Offer_Sale_Reducer,
  create_Production_Process_Reducer,
  get_ById_Production_Process_Reducer,
  get_Paging_Production_Process_Reducer,
  update_Production_Process_Reducer,
  update_WareHouse_Active_Reducer,
  update_Warehouse_Material_Transfer_Reducer,
  create_Sale_Order_Reducer,
  get_ById_Sale_Order_Reducer,
  update_Sale_Order_Reducer,
  get_Paging_Sale_Order_Reducer,
  create_Sale_Contract_Reducer,
  get_Paging_Sale_Contract_Reducer,
  get_ById_Sale_Contract_Reducer,
  delete_Sale_Contract_Reducer,
  get_by_Number_Sale_Offer_Reducer
})
const store = createStore(allReducers, applyMiddleware(thunk))
export default store