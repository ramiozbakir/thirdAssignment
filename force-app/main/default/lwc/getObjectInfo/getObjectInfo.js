import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue } from "lightning/uiRecordApi";
import NAME_FIELD from "@salesforce/schema/Account.Name";
import RECORDTYPE_FIELD from "@salesforce/schema/Account.RecordType.Name";
import CREATEDBY_FIELD from "@salesforce/schema/Account.CreatedBy.Name";
import MODIFIEDBY_FIELD from "@salesforce/schema/Account.LastModifiedBy.Name";

const fields = [NAME_FIELD, RECORDTYPE_FIELD, CREATEDBY_FIELD, MODIFIEDBY_FIELD];

export default class GetObjectInfo extends LightningElement {
    objectApiName = 'Account';
    @api recordId;

    @wire(getRecord, {
        recordId: "$recordId",
        fields
    })
    accountRec;

    get name() {
        return getFieldValue(this.accountRec.data, NAME_FIELD);
    }

    get recordType() {
        return getFieldValue(this.accountRec.data, RECORDTYPE_FIELD);
    }

    get createdBy() {
        return getFieldValue(this.accountRec.data, CREATEDBY_FIELD);
    }

    get lastModifiedBy() {
        return getFieldValue(this.accountRec.data, MODIFIEDBY_FIELD);
    }

}