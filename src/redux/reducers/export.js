import reducers from './reducers'
import aliReducer from './allgift'
import external from './external/reducer'
import postPhoneNumber from "./auth"
import postRegReducer from "./auth_registration"
import postSMS_Reducer from './auth/S_Code'
import get_Organisation_All_Reducer from "./sozlamalar/organisations"
import post_Org_Create_Reducer from "./sozlamalar/organisations/create"
import get_Org_Data_Id_Reducer from "./sozlamalar/organisations/getById"
import delete_Org_Id_Reducer from "./sozlamalar/organisations/delete"
import update_Org_Data_Id_Reducer from "./sozlamalar/organisations/update"
import get_Loyal_Reducer from "./sozlamalar/loyalty/get"
import set_Loyal_Reducer from "./sozlamalar/loyalty/set"
import post_Device_Create_Reducer from "./sozlamalar/device/create";
import get_Device_Paging_Reducer from "./sozlamalar/device/get-paging";
import get_Device_By_Id_Reducer from "./sozlamalar/device/getById";
import update_Device_By_Id_Reducer from "./sozlamalar/device/update";
import get_Feature_Data_Reducer from "./sozlamalar/functions/get";
import get_Payment_All_Reducer from "./sozlamalar/payment/get-all";
import post_Payment_Create_Reducer from "./sozlamalar/payment/create"
import get_Payment_By_Id_Reducer from "./sozlamalar/payment/getById";
import update_Payment_Data_Reducer from "./sozlamalar/payment/update";
import set_Features_Reducer from "./sozlamalar/functions/set";
import delete_Device_Many_Reducer from "./sozlamalar/device/delete";
import delete_Payment_Many_Reducer from "./sozlamalar/payment/delete"
import create_HR_Schedule_Reducer from "./hr/schedule/create";
import delete_HR_Schedule_Reducer from "./hr/schedule/delete";
import get_All_HR_Schedule_Reducer from "./hr/schedule/get-all";
import get_ById_HR_Schedule_Reducer from "./hr/schedule/get-by-id";
import get_For_CHoose_Schedule_Reducer from "./hr/schedule/get-for-choose";
import update_Schedule_Reducer from "./hr/schedule/update"
import create_HR_Section_Reducer from "./hr/section/create"
import delete_HR_Section_Reducer from "./hr/section/delete"
import get_Paging_HR_Section_Reducer from "./hr/section/get-paging"
import get_ById_HR_Section_Reducer from "./hr/section/get-by-id"
import get_For_Choose_Section_Reducer from './hr/section/get-for-choose'
import update_Section_Reducer from "./hr/section/update"
import create_HR_Position_Reducer from "./hr/position/create"
import delete_HR_Position_Reducer from './hr/position/delete'
import get_For_Choose_Position_Reducer from "./hr/position/get-for-choose"
import get_ById_HR_Position_Reducer from "./hr/position/get-by-id"
import update_Position_Reducer from "./hr/position/update"
import delete_Many_HR_Section_Reducer from './hr/section/deleteMany'
import get_Paging_Position_Reducer from './hr/position/get-paging'
import get_Paging_HR_Employee_Reducer from "./hr/employee/get-paging"
import create_Finance_Currency_Reducer from "./finance/currency/create"
import delete_Finance_Currency_Reducer from "./finance/currency/delete"
import get_All_Finance_Currency_Reducer from "./finance/currency/get-all"
import get_ById_Finance_Currency_Reducer from "./finance/currency/get-by-id"
import update_Finance_Currency_Reducer from "./finance/currency/update"
import create_Finance_Taxs_Reducer from "./finance/taxs/create"
import delete_Finance_Taxs_Reducer from "./finance/taxs/delete"
import get_All_Finance_Taxs_Reducer from "./finance/taxs/get-all"
import get_ById_Finance_Taxs_Reducer from "./finance/taxs/get-by-id"
import update_Finance_taxs_Reducer from "./finance/taxs/update"
import create_WareHouse_Category_Reducer from "./warehouse/category/create"
import delete_WareHouse_Category_Reducer from "./warehouse/category/delete"
import get_ById_WareHouse_Category_Reducer from "./warehouse/category/get-by-id"
import get_For_Choose_WareHouse_Category_Reducer from "./warehouse/category/get-for-choose"
import get_Paging_WareHouse_Category_Reducer from "./warehouse/category/get-paging"
import update_WareHouse_category_Reducer from "./warehouse/category/update"
import create_WareHouse_Active_Reducer from "./warehouse/active/create"
import delete_WareHouse_Active_Reducer from "./warehouse/active/delete"
import get_ById_WareHouse_Active_Reducer from "./warehouse/active/get-by-id"
import get_Paging_WareHouse_Active_Reducer from "./warehouse/active/get-paging"
import update_WareHouse_Active_Reducer from "./warehouse/active/update"
import create_WareHouse_Supplier_Reducer from "./warehouse/supplier/create"
import delete_WareHouse_Supplier_Reducer from "./warehouse/supplier/delete"
import get_ById_WareHouse_Supplier_Reducer from "./warehouse/supplier/get-by-id"
import get_For_Choose_WareHouse_Supplier_Reducer from "./warehouse/supplier/get-for-choose"
import get_Paging_WareHouse_Supplier_Reducer from "./warehouse/supplier/get-paging"
import update_WareHouse_Supplier_Reducer from "./warehouse/supplier/update"
import get_For_Choose_Employee_Reducer from "./hr/employee/get-for-choose"
import create_HR_Employee_Reducer from "./hr/employee/create"
import delete_HR_Employee_Reducer from "./hr/employee/delete"
import update_Employee_Reducer from "./hr/employee/update"
import get_ById_HR_Employee_Reducer from "./hr/employee/get-by-id"
import create_Products_product_Reducer from "./products/product/create"
import delete_Products_Product_Reducer from "./products/product/delete"
import get_ById_Products_Product_Reducer from "./products/product/get-by-id"
import get_For_Choose_Products_Product_Reducer from "./products/product/get-for-choose"
import get_Paging_Products_Product_Reducer from "./products/product/get-paging"
import update_Products_Product_Reducer from "./products/product/update"
import create_Products_Category_Reducer from "./products/category/create"
import delete_Products_Category_Reducer from "./products/category/delete"
import get_ById_Products_Category_Reducer from "./products/category/get-by-id"
import get_For_Choose_Products_Category_Reducer from "./products/category/get-for-choose"
import get_Paging_Products_Category_Reducer from "./products/category/get-paging"
import update_Products_Category_Reducer from "./products/category/update"
import create_Products_Income_Reducer from "./products/income/create"
import get_ById_Products_Income_Reducer from "./products/income/get-by-id"
import get_Paging_Products_Income_Reducer from "./products/income/get-paging"
import create_Products_Transfer_Reducer from "./products/transfer/create"
import cancel_Products_Transfer_Reducer from "./products/transfer/cancel"
import get_ById_Products_Transfer_Reducer from "./products/transfer/get-by-id"
import get_Paging_Products_Transfer_Reducer from "./products/transfer/get-paging"
import receive_Choose_Products_Transfer_Reducer from "./products/transfer/receive"
import update_Products_Transfer_Reducer from "./products/transfer/update"
import create_Products_Order_Reducer from "./products/order/create"
import cancel_Products_Order_Reducer from "./products/order/cancel"
import get_ById_Products_Order_Reducer from "./products/order/get-by-id"
import get_Paging_Products_Order_Reducer from "./products/order/get-paging"
import receive_Choose_Products_Order_Reducer from "./products/order/receive"
import update_Products_Order_Reducer from "./products/order/update"
import create_WareHouse_Material_Reducer from "./warehouse/material/create"
import delete_Many_WareHouse_Material_Reducer from "./warehouse/material/delete-many"
import delete_WareHouse_Material_Reducer from "./warehouse/material/delete"
import get_ById_WareHouse_Material_Reducer from "./warehouse/material/get-by-id"
import get_For_Choose_WareHouse_Material_Reducer from "./warehouse/material/get-for-choose"
import get_Paging_WareHouse_Material_Reducer from "./warehouse/material/get-paging"
import update_WareHouse_Material_Reducer from "./warehouse/material/update"
import create_Products_Income_AutoComplete_Reducer from "./products/income/income-autocomplete"
import create_Choose_For_Income_Reducer from "./products/income/choose-for-income"
import create_Products_Return_Reducer from "./products/return/create"
import choose_For_Return_Products_Reducer from './products/return/choose-for-return'
import get_ById_Products_Return_Reducer from "./products/return/get-by-id"
import get_Paging_Products_Return_Reducer from "./products/return/get-paging"
import create_Products_Order_AutoComplete_Reducer from "./products/order/order-autocomplete"
import choose_for_return_if_organization_Reducer from './products/return/choose-for-return-organization'
import choose_For_Transfer_Reducer from './products/transfer/choose-for-transfer'
import transfer_Autocomplete_Reducer from "./products/transfer/transfer-autocomplete"
import create_WareHouse_Income_Reducer from './warehouse/income/create'
import get_ById_WareHouse_Income_Reducer from './warehouse/income/get-by-id'
import get_Paging_WareHouse_Income_Reducer from './warehouse/income/get-paging'
import choose_For_Income_Warehouse_Reducer from './products/income/choose-for-income'
import income_Autocomplete_Warehouse_Reducer from './products/income/income-autocomplete'
import common_header_reducer from "./external/common_header"
import create_Warehouse_Material_Transfer_Reducer from './warehouse/transfer/create'
import cancel_Warehouse_Material_Transfer_Reducer from './warehouse/transfer/cancel'
import choose_For_Transfer_Warehouse_Material_Reducer from './warehouse/transfer/choose-for-transfer'
import get_ById_Warehouse_Material_Transfer_Reducer from './warehouse/transfer/get-by-id'
import get_Paging_Warehouse_Material_Transfer_Reducer from './warehouse/transfer/get-paging'
import receive_warehouse_material_transfer_Reducer from './warehouse/transfer/receive'
import transfer_Autocomplete_Warehouse_Material_Reducer from './warehouse/transfer/transfer-autocomplete'
import update_Warehouse_Material_Transfer_Reducer from './warehouse/transfer/update'
import create_Warehouse_Material_Order_Reducer from './warehouse/order/create'
import get_ById_Warehouse_Material_Order_Reducer from './warehouse/order/get-by-id'
import get_Paging_Warehouse_Material_Order_Reducer from './warehouse/order/get-paging'
import order_Autocomplete_Warehouse_Material_Reducer from './warehouse/order/order-autocomplete'    
import receive_warehouse_Material_Order_Reducer from './warehouse/order/receive'
import choose_For_Order_Warehouse_Material_Reducer from './warehouse/order/choose-for-order'
import update_Status_Warehouse_Reducer_Order_Reducer from './warehouse/order/update-status'
import update_Warehouse_Material_Order_Reducer from './warehouse/order/update'
import create_Warehouse_Material_Return_Reducer from './warehouse/return/create'
import get_ById_Warehouse_Material_Return_Reducer from './warehouse/return/get-by-id'
import get_Paging_Warehouse_Material_Return_Reducer from './warehouse/return/get-paging'
import choose_For_Return_Warehouse_Material_Reducer from './warehouse/return/choose-for-return'
import choose_For_Return_Organization_Warehouse_Material_Reducer from './warehouse/return/choose-for-return-organization'
import create_Sale_Customer_Reducer from './sale/customer/create'
import get_ById_Sale_Customer_Reducer from './sale/customer/get-by-id'
import get_Paging_Sale_Customer_Reducer from './sale/customer/get-paging'
import update_Sale_Customer_Reducer from './sale/customer/update'
import create_Sale_Discount_Reducer from './sale/discount/create'
import get_ById_Sale_Discount_Reducer from './sale/discount/get-by-id'
import get_Paging_Sale_Discount_Reducer from './sale/discount/get-paging'
import update_Sale_Discount_Reducer from './sale/discount/update'
import create_Sale_Cross_Sell_Reducer from './sale/cross-sell/create'
import get_ById_Sale_Cross_Sell_Reducer from './sale/cross-sell/get-by-id'
import get_Paging_Sale_Cross_Sell_Reducer from './sale/cross-sell/get-paging'
import update_Sale_Cross_Sell_Reducer from './sale/cross-sell/update'
import create_Sale_Offer_Reducer from './sale/offer/create'
import get_ById_Sale_Offer_Reducer from './sale/offer/get-by-id'
import get_Paging_Sale_Offer_Reducer from './sale/offer/get-paging'
import update_Sale_Offer_Reducer from './sale/offer/update'
import counter_Get_Sale_Offer_Reducer from './sale/offer/counter-get'
import get_Available_Cross_Sells_Get_Sale_Offer_Reducer from './sale/offer/get-available-cross-sells'
import get_For_Offer_Sale_Reducer from './sale/offer/get-for-offer'
import create_Production_Process_Reducer from './production/process/create'
import get_ById_Production_Process_Reducer from './production/process/get-by-id'
import get_Paging_Production_Process_Reducer from './production/process/get-paging'
import update_Production_Process_Reducer from './production/process/update'
import create_Sale_Order_Reducer from './sale/order/create'
import get_ById_Sale_Order_Reducer from './sale/order/get-by-id'
import get_Paging_Sale_Order_Reducer from './sale/order/get-paging'
import update_Sale_Order_Reducer from './sale/order/update'
import create_Sale_Contract_Reducer from './sale/contract/create'
import get_Paging_Sale_Contract_Reducer from './sale/contract/get-paging'
import get_ById_Sale_Contract_Reducer from './sale/contract/get-by-id'
import delete_Sale_Contract_Reducer from './sale/contract/delete'
import get_by_Number_Sale_Offer_Reducer from './sale/offer/get-by-number'

export {
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
    delete_WareHouse_Active_Reducer,
    get_ById_WareHouse_Active_Reducer,
    get_Paging_WareHouse_Active_Reducer,
    update_WareHouse_Active_Reducer,
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
    get_Paging_Products_Category_Reducer,
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
    update_Products_Order_Reducer,
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
    get_Paging_Warehouse_Material_Transfer_Reducer,
    receive_warehouse_material_transfer_Reducer,
    transfer_Autocomplete_Warehouse_Material_Reducer,
    update_Warehouse_Material_Transfer_Reducer,
    create_Warehouse_Material_Order_Reducer,
    get_ById_Warehouse_Material_Order_Reducer,
    get_Paging_Warehouse_Material_Order_Reducer,
    order_Autocomplete_Warehouse_Material_Reducer,
    receive_warehouse_Material_Order_Reducer,
    choose_For_Order_Warehouse_Material_Reducer,
    update_Status_Warehouse_Reducer_Order_Reducer,
    update_Warehouse_Material_Order_Reducer,
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
    create_Sale_Order_Reducer,
    get_ById_Sale_Order_Reducer,
    get_Paging_Sale_Order_Reducer,
    update_Sale_Order_Reducer,
    create_Sale_Contract_Reducer,
    get_Paging_Sale_Contract_Reducer,
    get_ById_Sale_Contract_Reducer,
    delete_Sale_Contract_Reducer,
    get_by_Number_Sale_Offer_Reducer
}