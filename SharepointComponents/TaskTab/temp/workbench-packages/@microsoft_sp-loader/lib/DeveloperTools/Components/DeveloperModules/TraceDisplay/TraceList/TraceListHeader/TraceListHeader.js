var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { getIconClassName } from 'office-ui-fabric-react/lib/Styling';
import { TraceDisplayStore } from '../../../../../Stores/TraceDisplayStore';
import styles from './TraceListHeader.module.scss';
import strings from './../../TraceDisplay.resx';
var TraceListHeader =  (function (_super) {
    __extends(TraceListHeader, _super);
    function TraceListHeader(props) {
        var _this = _super.call(this, props) || this;
        _this._handleFilterChange = _this._handleFilterChange.bind(_this);
        _this.state = {
            filterToggles: { level: false, scope: false, source: false }
        };
        return _this;
    }
    TraceListHeader.prototype.render = function () {
        var _this = this;
        return (React.createElement("ul", { className: styles.container },
            React.createElement("li", { className: styles.timestamp }, strings.TimestampHeaderLabel),
            React.createElement("li", { className: styles.level },
                React.createElement("p", { role: 'button', onClick: function () { return _this._toggleFilterStateForColumn('level'); }, className: styles.headerText }, strings.LevelHeaderLabel),
                React.createElement("button", { onClick: function () { return _this._toggleFilterStateForColumn('level'); }, className: [styles.filterButton, getIconClassName('Filter')].join(' ') }),
                React.createElement("div", { className: this._getFilterStyleForColumn('level'), id: 'levelFilterDropdown' }, Object.keys(this.props.filters.level).map(function (id) {
                    return React.createElement("div", { key: id, className: styles.filterRow },
                        React.createElement("input", { type: 'checkbox', name: 'level '.concat(id), "aria-checked": _this.props.filters.level[id], checked: _this.props.filters.level[id], onChange: _this._handleFilterChange }),
                        id);
                }))),
            React.createElement("li", { className: styles.scope },
                React.createElement("p", { role: 'button', onClick: function () { return _this._toggleFilterStateForColumn('scope'); }, className: styles.headerText }, strings.ScopeHeaderLabel),
                React.createElement("button", { onClick: function () { return _this._toggleFilterStateForColumn('scope'); }, className: [styles.filterButton, getIconClassName('Filter')].join(' ') }),
                React.createElement("div", { className: this._getFilterStyleForColumn('scope'), id: 'scopeFilterDropdown' }, Object.keys(this.props.filters.scope).map(function (id) {
                    return React.createElement("div", { key: id, className: styles.filterRow },
                        React.createElement("input", { type: 'checkbox', name: 'scope '.concat(id), "aria-checked": _this.props.filters.scope[id], checked: _this.props.filters.scope[id], onChange: _this._handleFilterChange }),
                        id);
                }))),
            React.createElement("li", { className: styles.source },
                React.createElement("p", { role: 'button', onClick: function () { return _this._toggleFilterStateForColumn('source'); }, className: styles.headerText }, strings.SourceHeaderLabel),
                React.createElement("button", { onClick: function () { return _this._toggleFilterStateForColumn('source'); }, className: [styles.filterButton, getIconClassName('Filter')].join(' ') }),
                React.createElement("div", { className: this._getFilterStyleForColumn('source'), id: 'sourceFilterDropdown' }, Object.keys(this.props.filters.source).map(function (id) {
                    return React.createElement("div", { key: id, className: styles.filterRow },
                        React.createElement("input", { type: 'checkbox', name: 'source '.concat(id), "aria-checked": _this.props.filters.source[id], checked: _this.props.filters.source[id], onChange: _this._handleFilterChange }),
                        id);
                }))),
            React.createElement("li", { className: styles.message }, strings.MessageHeaderLabel)));
    };
    TraceListHeader.prototype._getFilterStyleForColumn = function (columnId) {
        var filterStyle = this.state.filterToggles[columnId]
            ? styles.displayBlock
            : styles.displayNone;
        return [styles.filterOverlay, filterStyle].join(' ');
    };
    TraceListHeader.prototype._toggleFilterStateForColumn = function (columnId) {
        var filterToggles = { level: false, scope: false, source: false };
        for (var toggle in this.state.filterToggles) {
            if (this.state.filterToggles.hasOwnProperty(toggle)) {
                var value = this.state.filterToggles[toggle];
                filterToggles[toggle] = columnId === toggle ? !value : value;
            }
        }
        this.setState({ filterToggles: filterToggles });
    };
    TraceListHeader.prototype._handleFilterChange = function (event) {
        var all = 'all';
        var name = 'name';
        var eventTargetNameAttribute = event.target.getAttribute(name) || '';
        var filterDetailsTuple = eventTargetNameAttribute.split(' ');
        var filterType = filterDetailsTuple[0];
        var filterSubType = filterDetailsTuple[1];
        var subfilters = this.props.filters[filterType];
        if (filterSubType === all) {
            subfilters[all] = !subfilters[all];
            Object.keys(subfilters).forEach(function (element, count, array) {
                subfilters[element] = subfilters[all];
            });
        }
        else {
            subfilters[all] = false;
            subfilters[filterSubType] = !subfilters[filterSubType];
            var allTrue_1 = true;
            Object.keys(subfilters).forEach(function (key) {
                if (key !== all && subfilters[key] === false) {
                    allTrue_1 = false;
                }
            });
            if (allTrue_1) {
                subfilters[all] = true;
            }
        }
        TraceDisplayStore.instance.applyTraceFilter(this.props.filters);
    };
    return TraceListHeader;
}(React.Component));
export default TraceListHeader;
