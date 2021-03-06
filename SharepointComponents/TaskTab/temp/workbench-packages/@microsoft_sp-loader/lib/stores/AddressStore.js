var AddressStore =  (function () {
    function AddressStore() {
        this._addressMap = new Map();
        this._reverseAddressMap = new Map();
    }
    Object.defineProperty(AddressStore, "instance", {
        get: function () {
            if (!AddressStore._instance) {
                AddressStore._instance = new AddressStore();
            }
            return AddressStore._instance;
        },
        enumerable: true,
        configurable: true
    });
    AddressStore.prototype.tryGetAddress = function (normalizedName) {
        return this._addressMap.get(normalizedName);
    };
    AddressStore.prototype.getNormalizedName = function (address) {
        if (this._reverseAddressMap.has(address)) {
            return this._reverseAddressMap.get(address);
        }
        else {
            return undefined;
        }
    };
    AddressStore.prototype.set = function (normalizedName, address) {
        if (!this._addressMap.has(normalizedName)) {
            this._addressMap.set(normalizedName, address);
        }
        if (!this._reverseAddressMap.has(address)) {
            this._reverseAddressMap.set(address, normalizedName);
        }
    };
    return AddressStore;
}());
export default AddressStore;
