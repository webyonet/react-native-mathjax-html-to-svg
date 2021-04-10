import {
    PERC_SUPPORTED_STYLES,
    STYLESETS,
    ABSOLUTE_FONT_SIZE,
    stylePropTypes,
} from './HTMLUtils';

/**
 * Converts a html style string to an object
 * @param str: the style string
 * @return the style as an object
 */
export function cssStringToObject(str) {
    return str
        .split(';')
        .map((prop) => prop.split(':'))
        .reduce((acc, prop) => {
            if (prop.length === 2) {
                acc[prop[0].trim()] = prop[1].trim();
            }
            return acc;
        }, {});
}

/**
 * Converts a html style to its equivalent react native style
 * @param {object} css: object of key value css strings
 * @param {string} styleset: the styleset to convert the styles against
 * @param {object} { parentTag, emSize, ignoredStyles }
 * @returns {object}
 */
function cssToRNStyle(
    css,
    styleset,
    { emSize, ptSize, ignoredStyles, allowedStyles }
) {
    const styleProps = stylePropTypes[styleset];
    return Object.keys(css)
        .filter((key) => (allowedStyles ? allowedStyles.indexOf(key) !== -1 : true))
        .filter((key) => (ignoredStyles || []).indexOf(key) === -1)
        .map((key) => [key, css[key]])
        .map(([key, value]) => {
            // Key convert
            return [
                key
                    .split('-')
                    .map((item, index) =>
                        index === 0 ? item : item[0].toUpperCase() + item.substr(1)
                    )
                    .join(''),
                value,
            ];
        })
        .map(([key, value]) => {
            if (styleProps.indexOf(key) === -1) {
                return undefined;
            }

            if (typeof value === 'string') {
                value = value.replace(/\s*!\s*important/, '');

                if (key === 'textDecoration') {
                    key = 'textDecorationLine';
                }

                if (key === 'display' && ['flex', 'none'].indexOf(value) === -1) {
                    return [key, 'flex'];
                }
                if (key === 'textAlign') {
                    if (
                        ['left', 'right', 'justify', 'auto', 'center'].indexOf(value) !== -1
                    ) {
                        return [key, value];
                    }
                    if (value === 'start') {
                        return [key, 'left'];
                    }
                    if (value === 'end') {
                        return [key, 'right'];
                    }
                    return undefined;
                }
                if (
                    value
                        .replace(/[-_]/g, '')
                        .search(/\binherit\b|\bnormal\b|\bnone\b|(calc|var)\(.*\)/) !== -1
                ) {
                    return undefined;
                }
                // See if we can use the percentage directly
                if (
                    value.search(/[\d.]+%/) !== -1 &&
                    PERC_SUPPORTED_STYLES.indexOf(key) !== -1
                ) {
                    return [key, value];
                }
                if (value.search(/[\d.]+em/) !== -1) {
                    const pxSize = parseFloat(value.replace('em', '')) * emSize;
                    return [key, pxSize];
                }
                if (value.search(/[\d.]+pt/) !== -1) {
                    const pxSize = parseFloat(value.replace('pt', '')) * ptSize;
                    return [key, pxSize];
                }
                // See if we can convert a 20px to a 20 automagically
                const numericValue = parseFloat(value.replace('px', ''));
                if (key !== 'fontWeight' && !isNaN(numericValue)) {
                    if (styleProps.indexOf(key) !== -1) {
                        return [key, numericValue];
                    }
                }
                if (key === 'fontSize') {
                    return mapAbsoluteFontSize(key, value);
                }
            }
            return [key, value];
        })
        .filter((prop) => prop !== undefined)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
}

/**
 * @param {string} key: the key of style
 * @param {string} value: the value of style
 * @return {array}
 */
function mapAbsoluteFontSize(key, value) {
    let fontSize = value;
    if (ABSOLUTE_FONT_SIZE.hasOwnProperty(value)) {
        fontSize = ABSOLUTE_FONT_SIZE[value];
    }
    return [key, fontSize];
}

/**
 * @param str: the css style string
 * @param styleset=STYLESETS.TEXT: the styleset to convert the styles against
 * @return a react native style object
 */
export function cssStringToRNStyle(str, styleset = STYLESETS.TEXT) {
    return cssToRNStyle(cssStringToObject(str), styleset, { emSize: 1, ptSize: 1 });
}
