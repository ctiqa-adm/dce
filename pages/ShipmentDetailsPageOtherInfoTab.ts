import { Locator, Page } from "@playwright/test";

/** Represents the Shipment Details Other Info tab. */
export class ShipmentDetailsPageOtherInfoTab {
    readonly page: Page;
    readonly tabHeader: Locator;
    readonly messageEntryNumberInput: Locator;
    readonly invoiceTypeInput: Locator;
    readonly customsRefNumberInput: Locator;
    readonly customsAcctNoInput: Locator;
    readonly customsSubDateInput: Locator;
    readonly customsSubDateHoursInput: Locator;
    readonly customsSubDateMinutesInput: Locator;
    readonly customsAckDateInput: Locator;
    readonly customsAckDateHoursInput: Locator;
    readonly customsAckDateMinutesInput: Locator;
    readonly customsResDateInput: Locator;
    readonly customsResDateHoursInput: Locator;
    readonly customsResDateMinutesInput: Locator;
    readonly clearanceDateInput: Locator;
    readonly clearanceDateHoursInput: Locator;
    readonly clearanceDateMinutesInput: Locator;
    readonly pickupDateInput: Locator;
    readonly pickupDateHoursInput: Locator;
    readonly pickupDateMinutesInput: Locator;
    readonly ncDateInput: Locator;
    readonly ncDateHoursInput: Locator;
    readonly ncDateMinutesInput: Locator;
    readonly notificationDateInput: Locator;
    readonly valuationDateInput: Locator;
    readonly outboundHawbInput: Locator;
    readonly customsReceiptNumberInput: Locator;
    readonly dhlReferenceNumberInput: Locator;
    readonly customsInstInput: Locator;
    readonly dutyTaxApprovalInput: Locator;
    readonly customsDeclarationNumberInput: Locator;
    readonly reasonForExportInput: Locator;
    readonly consignmentSeqNumberInput: Locator;
    readonly paymentReferenceInput: Locator;
    readonly securityDetailsInput: Locator;
    readonly goodsDeclarationNumberInput: Locator;
    readonly customsFormDescInput: Locator;
    readonly addDocTypesInput: Locator;
    readonly uniqueConsignmentRefNoInput: Locator;
    readonly arrivalConfirmationIndInput: Locator;
    readonly entryCustomsOfficeInput: Locator;
    readonly exitCustomsOfficeInput: Locator;
    readonly transitCustomsOfficeInput: Locator;
    readonly valuationMethodInput: Locator;
    readonly exportRequestInput: Locator;
    readonly productContentCodeInput: Locator;
    readonly prevCustomsRefNumberInput: Locator;
    readonly eventCodeInput: Locator;
    readonly reasonCodeInput: Locator;
    readonly paymentMethodTypeCodeInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.tabHeader = page.locator('text=Other Info');
        this.messageEntryNumberInput = page.locator('input[name="ctl00\$cp2\$txtEntryNumber"]');
        this.invoiceTypeInput = page.locator('input[name="ctl00\$cp2\$txtInvoiceType"]');
        this.customsRefNumberInput = page.locator('input[name="ctl00\$cp2\$txtCustomsReferenceNumber"]');
        this.customsAcctNoInput = page.locator('input[name="ctl00\$cp2\$txtCustomsAcctNo"]');
        this.customsSubDateInput = page.locator('input[name="ctl00\$cp2\$customsSDCalendar\$txtDate"]');
        this.customsSubDateHoursInput = page.locator('input[name="ctl00\$cp2\$customsSDCalendar\$txtHours"]');
        this.customsSubDateMinutesInput = page.locator('input[name="ctl00\$cp2\$customsSDCalendar\$txtMinutes"]');
        this.customsAckDateInput = page.locator('input[name="ctl00\$cp2\$customsADCalendar\$txtDate"]');
        this.customsAckDateHoursInput = page.locator('input[name="ctl00\$cp2\$customsADCalendar\$txtHours"]');
        this.customsAckDateMinutesInput = page.locator('input[name="ctl00\$cp2\$customsADCalendar\$txtMinutes"]');
        this.customsResDateInput = page.locator('input[name="ctl00\$cp2\$customsCRDCalendar\$txtDate"]');
        this.customsResDateHoursInput = page.locator('input[name="ctl00\$cp2\$customsCRDCalendar\$txtHours"]');
        this.customsResDateMinutesInput = page.locator('input[name="ctl00\$cp2\$customsCRDCalendar\$txtMinutes"]');
        this.clearanceDateInput = page.locator('input[name="ctl00\$cp2\$clearedDateCalendar\$txtDate"]');
        this.clearanceDateHoursInput = page.locator('input[name="ctl00\$cp2\$clearedDateCalendar\$txtHours"]');
        this.clearanceDateMinutesInput = page.locator('input[name="ctl00\$cp2\$clearedDateCalendar\$txtMinutes"]');
        this.pickupDateInput = page.locator('input[name="ctl00\$cp2\$pickupDateCalendar\$txtDate"]');
        this.pickupDateHoursInput = page.locator('input[name="ctl00\$cp2\$pickupDateCalendar\$txtHours"]');
        this.pickupDateMinutesInput = page.locator('input[name="ctl00\$cp2\$pickupDateCalendar\$txtMinutes"]');
        this.ncDateInput = page.locator('input[name="ctl00\$cp2\$ncDateCalendar\$txtDate"]');
        this.ncDateHoursInput = page.locator('input[name="ctl00\$cp2\$ncDateCalendar\$txtHours"]');
        this.ncDateMinutesInput = page.locator('input[name="ctl00\$cp2\$ncDateCalendar\$txtMinutes"]');
        this.notificationDateInput = page.locator('input[name="ctl00\$cp2\$notificationDateCalendar\$txtDate"]');
        this.valuationDateInput = page.locator('input[name="ctl00\$cp2\$valuationDateCalendar\$txtDate"]');
        this.outboundHawbInput = page.locator('input[name="ctl00\$cp2\$txtOutboundHawb"]');
        this.customsReceiptNumberInput = page.locator('input[name="ctl00\$cp2\$txtCustomsReceiptNumber"]');
        this.dhlReferenceNumberInput = page.locator('input[name="ctl00\$cp2\$txtDhlReferenceNumber"]');
        this.customsInstInput = page.locator('textarea[name="ctl00\$cp2\$txtReasonForRejection"]');
        this.dutyTaxApprovalInput = page.locator('input[name="ctl00\$cp2\$txtOtherInfoDutyTaxApproval"]');
        this.customsDeclarationNumberInput = page.locator('input[name="ctl00\$cp2\$txtOtherInfoCustomsDeclarationNumber"]');
        this.reasonForExportInput = page.locator('input[name="ctl00\$cp2\$txtOtherInfoReasonForExport"]');
        this.consignmentSeqNumberInput = page.locator('input[name="ctl00\$cp2\$txtConsignmentSequenceNo"]');
        this.paymentReferenceInput = page.locator('input[name="ctl00\$cp2\$txtPymtRef"]');
        this.securityDetailsInput = page.locator('input[name="ctl00\$cp2\$txtSecurityDtls"]');
        this.goodsDeclarationNumberInput = page.locator('input[name="ctl00\$cp2\$txtGoodsDeclarationNo"]');
        this.customsFormDescInput = page.locator('input[name="ctl00\$cp2\$txtCstmsFormDesc"]');
        this.addDocTypesInput = page.locator('input[name="ctl00\$cp2\$txtAddDocTypes"]');
        this.uniqueConsignmentRefNoInput = page.locator('input[name="ctl00\$cp2\$txtUniqueConsignmentRefNo"]');
        this.arrivalConfirmationIndInput = page.locator('input[name="ctl00\$cp2\$txtArrivalConfirmationInd"]');
        this.entryCustomsOfficeInput = page.locator('input[name="ctl00\$cp2\$txtEntryCstmsOffice"]');
        this.exitCustomsOfficeInput = page.locator('input[name="ctl00\$cp2\$txtExitCstmsOffice"]');
        this.transitCustomsOfficeInput = page.locator('input[name="ctl00\$cp2\$txtTransitCstmsOffice"]');
        this.valuationMethodInput = page.locator('input[name="ctl00\$cp2\$txtValuationMethod"]');
        this.exportRequestInput = page.locator('input[name="ctl00\$cp2\$txtExptRequest"]');
        this.productContentCodeInput = page.locator('input[name="ctl00\$cp2\$txtProdContentCd"]');
        this.prevCustomsRefNumberInput = page.locator('input[name="ctl00\$cp2\$txtOldCstmsRefNumber"]');
        this.eventCodeInput = page.locator('input[name="ctl00\$cp2\$txtEventCode"]');
        this.reasonCodeInput = page.locator('input[name="ctl00\$cp2\$txtReasonCode"]');
        this.paymentMethodTypeCodeInput = page.locator('select[name="ctl00\$cp2\$ddlPaymentMethodTypeCode"]');
    }

    /** Selects the Shipment Details Info tab. */
    async selectTab(): Promise<void> {
        await this.tabHeader.click();
    }
}