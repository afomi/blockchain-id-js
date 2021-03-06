'use strict'

function blockchainIdUrl(id) {
    return "id://" + id
}

function mergeObjects(destination, source) {
    for (var property in source) {
        // if the property is really valid
        if (source.hasOwnProperty(property)) {
            if (destination.hasOwnProperty(property)) {
                if (Array.isArray(destination[property]) && Array.isArray(source[property])) {
                    // if the propety is a list in both the destination and the source
                    // merge the two lists
                    destination[property] = destination[property].concat(source[property])
                } else {
                    // if the property is not a list, override the previous
                    destination[property] = source[property]
                }
            } else {
                // if the property hasn't been seen yet, just add it in
                destination[property] = source[property]
            }
        }
    }
    return destination
}

module.exports = {
    blockchainIdUrl: blockchainIdUrl,
    mergeObjects: mergeObjects
}