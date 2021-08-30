import { postSMS } from "./auth/S_code"
import { postRegistration } from "./auth_registration"
import { postPhoneNumber } from "./auth"
import { get_Organisation_All_Data } from "./sozlamalar/organisations"
import { post_Org_Create_Action } from "./sozlamalar/organisations/create"
import { get_Org_Data_Id_Action } from "./sozlamalar/organisations/getById"
import { delete_Org_Id_Action } from "./sozlamalar/organisations/delete"
import { update_Org_Data_Id_Action } from "./sozlamalar/organisations/update"
import { get_Loyal_Action } from "./sozlamalar/loyalty/get"
import { set_Loyal_Action } from "./sozlamalar/loyalty/set"
import { post_Device_Create_Action } from "./sozlamalar/device/create"
import { get_Device_Paging_Action } from "./sozlamalar/device/get-paging"
import { get_Device_By_Id_Action } from "./sozlamalar/device/getById"
import { update_Device_By_Id_Action } from "./sozlamalar/device/update"
import { get_Feature_Data_Action } from "./sozlamalar/functions/get"
import { get_Payment_All_Action } from "./sozlamalar/payment/get-all"
import { post_Payment_Create_Action } from "./sozlamalar/payment/create"
import { get_Payment_By_Id_Action } from "./sozlamalar/payment/getById"
import { update_Payment_Data_Action } from "./sozlamalar/payment/update"
import { set_Features_Action } from "./sozlamalar/functions/set"
import { delete_Device_Many_Action } from "./sozlamalar/device/delete"
import { delete_Payment_Many_Action } from "./sozlamalar/payment/delete"
import { create_HR_Schedule_Action } from "./hr/schedule/create"
import { get_All_HR_Schedule_Action } from "./hr/schedule/get-all"
import { get_ById_HR_Schedule_Action } from "./hr/schedule/get-by-id"
import { get_ForChoose_HR_Schedule_Action } from "./hr/schedule/get-for-choose"
import { update_HR_Schedule_Action } from "./hr/schedule/update"
import { delete_HR_Schedule_Action } from "./hr/schedule/delete"
import { create_HR_Section_Action } from "./hr/section/create"
import { delete_HR_Section_Action } from "./hr/section/delete";
import { get_Paging_HR_Section_Action } from "./hr/section/get-paging"
import { get_ById_HR_Section_Action } from "./hr/section/get-by-id";
import { get_ForChoose_HR_Section_Action } from "./hr/section/get-for-choose";
import { update_HR_Section_Action } from "./hr/section/update"
import { create_HR_Position_Action } from "./hr/position/create"
import { update_HR_Position_Action } from "./hr/position/update"
import { delete_HR_Position_Action } from "./hr/position/delete"
import { get_Paging_Position_Action } from "./hr/position/get-paging"
import { get_ForChoose_HR_Position_Action } from "./hr/position/get-for-choose"
import { get_ById_HR_Position_Action } from "./hr/position/get-by-id"
import { delete_Many_HR_Section_Action } from "./hr/section/deleteMany"
import { get_Paging_Employee_Action } from "./hr/employee/get-paging"
import { create_HR_Employee_Action } from "./hr/employee/create"
import { create_Finance_Currency_Action } from "./finance/currency/create"
import { delete_Finance_Currency_Action } from "./finance/currency/delete"
import { get_All_Finance_Currency_Action } from "./finance/currency/get-all"
import { get_By_Id_Finance_Currency_Action } from "./finance/currency/get-by-id"
import { update_Finance_Currency_Action } from "./finance/currency/update"
import { create_Finance_Taxs_Action } from "./finance/taxs/create"
import { update_Finance_Taxs_Action } from "./finance/taxs/update"
import { delete_Finance_Taxs_Action } from "./finance/taxs/delete"
import { get_All_Finance_Taxs_Action } from "./finance/taxs/get-all"
import { get_ById_Finance_Taxs_Action } from "./finance/taxs/get-by-id"
import { create_WareHouse_Supplier_Action } from "./warehouse/supplier/create"
import { update_WareHouse_Supplier_Action } from "./warehouse/supplier/update"
import { get_ById_WareHouse_Supplier_Action } from "./warehouse/supplier/get-by-id"
import { delete_WareHouse_Supplier_Action } from "./warehouse/supplier/delete"
import { create_WareHouse_Category_Action } from "./warehouse/category/create"
import { get_ById_WareHouse_Category_Action } from "./warehouse/category/get-by-id"
import { update_WareHouse_Category_Action } from "./warehouse/category/update"
import { delete_WareHouse_Category_Action } from "./warehouse/category/delete"
import { create_Products_Product_Action } from "./products/product/create"
import { delete_Products_Product_Action } from "./products/product/delete"
import { get_ById_Products_Product_Action } from "./products/product/get-by-id"
import { get_ForChoose_Products_Product_Action } from "./products/product/get-for-choose"
import { get_Paging_Products_Product_Action } from "./products/product/get-paging"
import { update_Products_Product_Action } from "./products/product/update"
import { create_Products_Category_Action } from "./products/category/create"
import { update_Products_Category_Action } from "./products/category/update"
import { delete_Products_Category_Action } from "./products/category/delete"
import { get_ById_Products_Category_Action } from "./products/category/get-by-id"
import { get_ForChoose_Products_Category_Action } from "./products/category/get-for-choose"
import { get_Paging_Products_Category_Action } from "./products/category/get-paging"
import { create_Products_Income_Action } from "./products/income/create"
import { get_ById_Products_Income_Action } from "./products/income/get-by-id"
import { get_Paging_Products_Income_Action } from "./products/income/get-paging"
import { create_WareHouse_Material_Action } from "./warehouse/material/create"
import { update_WareHouse_Material_Action } from "./warehouse/material/update"
import { delete_WareHouse_Material_Action } from "./warehouse/material/delete"
import { get_ById_WareHouse_Material_Action } from "./warehouse/material/get-by-id"
import { get_Paging_WareHouse_Material_Action } from "./warehouse/material/get-paging"
import { get_ForChoose_WareHouse_Material_Action } from "./warehouse/material/get-for-choose"
import { get_ById_HR_Employee_Action } from "./hr/employee/get-by-id"
import { create_Choose_For_Income_Action } from "./products/income/choose-for-income"
import { create_Income_AutoComplete_Action } from "./products/income/income-autocomplete"
import { get_Paging_Products_Order_Action } from "./products/order/get-paging"
import { get_Paging_Products_Transfer_Action } from "./products/transfer/get-paging"
import { Choose_For_Return_Products_Action } from "./products/return/choose-for-return"
import { create_Products_Return_Action } from "./products/return/create"
import { get_ById_Products_Return_Action } from "./products/return/get-by-id"
import { get_Paging_Products_Return_Action } from "./products/return/get-paging"
import { create_Order_Autocomplete_Action } from "./products/order/order-autocomplete"
import { create_Products_Order_Action } from "./products/order/create"
import { Choose_For_Return_If_Organization_Products_Action } from "./products/return/choose-for-return-organization"
import { get_ById_Products_Order_Action } from "./products/order/get-by-id"
import { receive_Products_Order_Action } from "./products/order/receive"
import { update_Products_Order_Action } from "./products/order/update"
import { choose_For_Transfer_Action } from './products/transfer/choose-for-transfer'
import { products_transfer_Autocomplete_Action } from './products/transfer/transfer-autocomplete'
import { create_Products_Transfer_Action } from './products/transfer/create'
import { get_ById_Products_Transfer_Action } from "./products/transfer/get-by-id"
import { update_Products_Transfer_Action } from './products/transfer/update'
import { receive_Products_Transfer_Action } from "./products/transfer/receive"
import { create_WareHouse_Income_Action } from './warehouse/income/create'
import { get_ById_WareHouse_Income_Action } from './warehouse/income/get-by-id'
import { get_Paging_WareHouse_Income_Action } from './warehouse/income/get-paging'
import { choose_For_Income_WareHouse_Action } from './warehouse/income/choose-for-income'
import { income_Autocomplete_Warehouse_Action } from './warehouse/income/income-autocomplete'
import { create_Warehouse_Transfer_Action } from './warehouse/transfer/create'
import { update_Materials_Transfer_Action } from './warehouse/transfer/update'
import { receive_Warehouse_Transfer_Action } from './warehouse/transfer/receive'
import { get_ById_Warehouse_Transfer_Action } from './warehouse/transfer/get-by-id'
import { get_Paging_Warehouse_Material_Transfer_Action } from './warehouse/transfer/get-paging'
import { cancel_Warehouse_Material_Transfer_Action } from './warehouse/transfer/cancel'
import { choose_For_Transfer_Warehouse_Material_Action } from './warehouse/transfer/choose-for-transfer'
import { warehouse_Material_Transfer_Autocomplete_Action } from './warehouse/transfer/transfer-autocomplete'
import { create_Warehouse_Material_Order_Action } from './warehouse/order/create'
import { update_Warehouse_Material_Order_Action } from './warehouse/order/update'
import { receive_Warehouse_Material_Order_Action } from './warehouse/order/receive'
import { get_ById_Warehouse_Material_Order_Action } from './warehouse/order/get-by-id'
import { set_Status_Warehouse_Material_Order_Action } from './warehouse/order/update-status'
import { get_Paging_Warehouse_Material_Order_Action } from './warehouse/order/get-paging'
import { Order_Autocomplete_Warehouse_Material_Action } from './warehouse/order/order-autocomplete'
import { choose_For_Order_Warehouse_Material_Action } from './warehouse/order/choose-for-order'
import { common_header_action } from "./external/common_header"
import { create_Warehouse_Material_Return_Action } from './warehouse/return/create'
import { get_ById_Warehouse_Material_Return_Action } from './warehouse/return/get-by-id'
import { get_Paging_Warehouse_Material_Return_Action } from './warehouse/return/get-paging'
import { Choose_For_Return_Warehouse_Material_Action } from './warehouse/return/choose-for-return'
import { Choose_For_Return_If_Organization_Warehouse_Material_Action } from './warehouse/return/choose-for-return-organization'
import { create_Sale_Customer_Action } from './sale/customer/create'
import { update_Sale_Customer_Action } from './sale/customer/update'
import { get_ById_Sale_Customer_Action } from './sale/customer/get-by-id'
import { get_Paging_Sale_Customer_Action } from './sale/customer/get-paging'
import { get_Paging_WareHouse_Supplier_Action } from "./warehouse/supplier/get-paging"
import { get_ForChoose_WareHouse_Category_Action } from "./warehouse/category/get-for-choose"
import { get_ForChoose_WareHouse_Supplier_Action } from "./warehouse/supplier/get-for-choose"
import { create_Sale_Discount_Action } from './sale/discount/create'
import { update_Sale_Discount_Action } from './sale/discount/update'
import { get_ById_Sale_Discount_Action } from './sale/discount/get-by-id'
import { get_Paging_Sale_Discount_Action } from './sale/discount/get-paging'
import { create_Sale_Cross_Sell_Action } from './sale/cross-sell/create'
import { update_Sale_Cross_Sell_Action } from './sale/cross-sell/update'
import { get_ById_Sale_Cross_Sell_Action } from './sale/cross-sell/get-by-id'
import { get_Paging_Sale_Cross_Sell_Action } from './sale/cross-sell/get-paging'
import { create_Sale_Offer_Action } from './sale/offer/create'
import { update_Sale_Offer_Action } from './sale/offer/update'
import { get_ById_Sale_Offer_Action } from './sale/offer/get-by-id'
import { get_Paging_Sale_Offer_Action } from './sale/offer/get-paging'
import { counter_get_Sale_Offer_Action } from './sale/offer/counter-get'
import { get_Available_Cross_Sells_Sale_Offer_Action } from './sale/offer/get-available-cross-sells'
import { get_For_Offer_Sale_Offer_Action } from './sale/offer/get-for-offer'
import { create_Production_Process_Action } from './production/process/create'
import { get_ById_Production_Process_Action } from './production/process/get-by-id'
import { get_Paging_Production_Process_Action } from './production/process/get-paging'
import { get_Paging_WareHouse_Active_Action } from './warehouse/active/get-paging'
import { create_WareHouse_Active_Action } from './warehouse/active/create'
import { get_ById_WareHouse_Active_Action } from './warehouse/active/get-by-id'
import { update_WareHouse_Active_Action } from './warehouse/active/update'
import { delete_WareHouse_Active_Action } from './warehouse/active/delete'
import { create_Sale_Order_Action } from './sale/order/create'
import { update_Sale_Order_Action } from './sale/order/update'
import { get_ById_Sale_Order_Action } from './sale/order/get-by-id'
import { get_Paging_Sale_Order_Action } from './sale/order/get-paging'
import { create_Sale_Contract_Action } from './sale/contract/create'
import { get_Paging_Sale_Contract_Action } from './sale/contract/get-paging'
import { get_ById_Sale_Contract_Action } from './sale/contract/get-by-id'
import { delete_Sale_Contract_Action } from './sale/contract/delete'
import {get_by_Number_Sale_Offer_Action} from './sale/offer/get-by-number'

export {
    postPhoneNumber,
    postRegistration,
    postSMS,
    get_Organisation_All_Data,
    post_Org_Create_Action,
    get_Org_Data_Id_Action,
    delete_Org_Id_Action,
    update_Org_Data_Id_Action,
    get_Loyal_Action,
    set_Loyal_Action,
    post_Device_Create_Action,
    get_Device_Paging_Action,
    get_Device_By_Id_Action,
    update_Device_By_Id_Action,
    get_Feature_Data_Action,
    get_Payment_All_Action,
    post_Payment_Create_Action,
    get_Payment_By_Id_Action,
    update_Payment_Data_Action,
    set_Features_Action,
    delete_Device_Many_Action,
    delete_Payment_Many_Action,
    create_HR_Schedule_Action,
    get_All_HR_Schedule_Action,
    get_ById_HR_Schedule_Action,
    get_ForChoose_HR_Schedule_Action,
    update_HR_Schedule_Action,
    delete_HR_Schedule_Action,
    create_HR_Section_Action,
    delete_HR_Section_Action,
    get_Paging_HR_Section_Action,
    get_ById_HR_Section_Action,
    get_ForChoose_HR_Section_Action,
    update_HR_Section_Action,
    create_HR_Position_Action,
    update_HR_Position_Action,
    delete_HR_Position_Action,
    get_Paging_Position_Action,
    create_HR_Employee_Action,
    get_ForChoose_HR_Position_Action,
    get_ById_HR_Position_Action,
    delete_Many_HR_Section_Action,
    get_ById_HR_Employee_Action,
    get_Paging_Employee_Action,
    create_Finance_Currency_Action,
    delete_Finance_Currency_Action,
    get_All_Finance_Currency_Action,
    get_By_Id_Finance_Currency_Action,
    update_Finance_Currency_Action,
    create_Finance_Taxs_Action,
    update_Finance_Taxs_Action,
    delete_Finance_Taxs_Action,
    get_All_Finance_Taxs_Action,
    get_ById_Finance_Taxs_Action,
    create_WareHouse_Supplier_Action,
    update_WareHouse_Supplier_Action,
    get_ById_WareHouse_Supplier_Action,
    delete_WareHouse_Supplier_Action,
    create_WareHouse_Category_Action,
    get_ById_WareHouse_Category_Action,
    update_WareHouse_Category_Action,
    delete_WareHouse_Category_Action,
    create_Products_Product_Action,
    delete_Products_Product_Action,
    get_ById_Products_Product_Action,
    get_ForChoose_Products_Product_Action,
    get_Paging_Products_Product_Action,
    update_Products_Product_Action,
    create_Products_Category_Action,
    update_Products_Category_Action,
    delete_Products_Category_Action,
    get_ById_Products_Category_Action,
    get_ForChoose_Products_Category_Action,
    get_Paging_Products_Category_Action,
    create_Products_Income_Action,
    get_ById_Products_Income_Action,
    get_Paging_Products_Income_Action,
    create_WareHouse_Material_Action,
    update_WareHouse_Material_Action,
    delete_WareHouse_Material_Action,
    get_ById_WareHouse_Material_Action,
    get_Paging_WareHouse_Material_Action,
    get_ForChoose_WareHouse_Material_Action,
    create_Choose_For_Income_Action,
    create_Income_AutoComplete_Action,
    get_Paging_Products_Order_Action,
    get_Paging_Products_Transfer_Action,
    Choose_For_Return_Products_Action,
    create_Products_Return_Action,
    get_ById_Products_Return_Action,
    get_Paging_Products_Return_Action,
    create_Order_Autocomplete_Action,
    create_Products_Order_Action,
    Choose_For_Return_If_Organization_Products_Action,
    get_ById_Products_Order_Action,
    receive_Products_Order_Action,
    update_Products_Order_Action,
    choose_For_Transfer_Action,
    products_transfer_Autocomplete_Action,
    create_Products_Transfer_Action,
    get_ById_Products_Transfer_Action,
    update_Products_Transfer_Action,
    receive_Products_Transfer_Action,
    create_WareHouse_Income_Action,
    get_ById_WareHouse_Income_Action,
    get_Paging_WareHouse_Income_Action,
    choose_For_Income_WareHouse_Action,
    income_Autocomplete_Warehouse_Action,
    common_header_action,
    create_Warehouse_Transfer_Action,
    update_Materials_Transfer_Action,
    receive_Warehouse_Transfer_Action,
    get_ById_Warehouse_Transfer_Action,
    get_Paging_Warehouse_Material_Transfer_Action,
    cancel_Warehouse_Material_Transfer_Action,
    choose_For_Transfer_Warehouse_Material_Action,
    warehouse_Material_Transfer_Autocomplete_Action,
    create_Warehouse_Material_Order_Action,
    update_Warehouse_Material_Order_Action,
    receive_Warehouse_Material_Order_Action,
    get_ById_Warehouse_Material_Order_Action,
    set_Status_Warehouse_Material_Order_Action,
    get_Paging_Warehouse_Material_Order_Action,
    Order_Autocomplete_Warehouse_Material_Action,
    choose_For_Order_Warehouse_Material_Action,
    create_Warehouse_Material_Return_Action,
    get_ById_Warehouse_Material_Return_Action,
    get_Paging_Warehouse_Material_Return_Action,
    Choose_For_Return_Warehouse_Material_Action,
    Choose_For_Return_If_Organization_Warehouse_Material_Action,
    create_Sale_Customer_Action,
    update_Sale_Customer_Action,
    get_ById_Sale_Customer_Action,
    get_Paging_Sale_Customer_Action,
    get_Paging_WareHouse_Supplier_Action,
    get_ForChoose_WareHouse_Category_Action,
    get_ForChoose_WareHouse_Supplier_Action,
    create_Sale_Discount_Action,
    update_Sale_Discount_Action,
    get_ById_Sale_Discount_Action,
    get_Paging_Sale_Discount_Action,
    create_Sale_Cross_Sell_Action,
    update_Sale_Cross_Sell_Action,
    get_ById_Sale_Cross_Sell_Action,
    get_Paging_Sale_Cross_Sell_Action,
    create_Sale_Offer_Action,
    update_Sale_Offer_Action,
    get_ById_Sale_Offer_Action,
    get_Paging_Sale_Offer_Action,
    counter_get_Sale_Offer_Action,
    get_Available_Cross_Sells_Sale_Offer_Action,
    get_For_Offer_Sale_Offer_Action,
    create_Production_Process_Action,
    get_ById_Production_Process_Action,
    get_Paging_Production_Process_Action,
    get_Paging_WareHouse_Active_Action,
    create_WareHouse_Active_Action,
    get_ById_WareHouse_Active_Action,
    update_WareHouse_Active_Action,
    delete_WareHouse_Active_Action,
    create_Sale_Order_Action,
    update_Sale_Order_Action,
    get_ById_Sale_Order_Action,
    get_Paging_Sale_Order_Action,
    create_Sale_Contract_Action,
    get_Paging_Sale_Contract_Action,
    get_ById_Sale_Contract_Action,
    delete_Sale_Contract_Action,
    get_by_Number_Sale_Offer_Action
}
