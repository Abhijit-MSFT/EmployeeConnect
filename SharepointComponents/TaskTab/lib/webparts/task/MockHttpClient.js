var MockHttpClient = /** @class */ (function () {
    function MockHttpClient() {
    }
    MockHttpClient.get = function () {
        return new Promise(function (resolve) {
            resolve(MockHttpClient._items);
        });
    };
    MockHttpClient._items = [
        {
            PoNumber: "848930",
            Description: "",
            InvoiceNo: "346829",
            VendorName: "Store A",
            VendorNo: "72383",
            TotalAmount: "30828",
            PoStatus: "Approved"
        },
        {
            PoNumber: "848930",
            Description: "",
            InvoiceNo: "346829",
            VendorName: "Store B",
            VendorNo: "72383",
            TotalAmount: "30828",
            PoStatus: "Declined"
        }
    ];
    return MockHttpClient;
}());
export default MockHttpClient;
//# sourceMappingURL=MockHttpClient.js.map