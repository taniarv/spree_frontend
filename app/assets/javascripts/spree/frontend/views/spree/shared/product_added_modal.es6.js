import { Modal } from "bootstrap"

Spree.showProductAddedModal = function(product, variant) {
  var modalSelector = '.product-added-modal'
  var nameSelector = '.product-added-modal-product-details-name'
  var priceSelector = '.product-added-modal-product-details-price'
  var imageSelector = '.product-added-modal-product-image-container-image'
  var modalNoImageClass = 'product-added-modal--no-image'

  var price = variant.display_price
  var images = variant && variant.images.length > 0 ? variant.images : product.images
  var name = product.name
  var leadImage = images.length === 0 ? null : images[0]
  var $modal = $(modalSelector)
  var bsModal = new Modal(document.querySelector(modalSelector), {})

  $modal.find(nameSelector).text(name)
  $modal.find(priceSelector).html(price)

  if (leadImage !== null) {
    $modal
      .removeClass(modalNoImageClass)
      .find(imageSelector)
      .attr('src', leadImage.url_product)
      .attr('alt', leadImage.alt || name)
  } else {
    $modal.addClass(modalNoImageClass)
  }

  //$modal.modal()
  bsModal.show()
}

Spree.hideProductAddedModal = function() {
  var modalSelector = '.product-added-modal'
  var $modal = $(modalSelector)
  if ($modal.length > 0 && document.querySelector(modalSelector) != undefined) {
    var bsModal = new Modal(document.querySelector(modalSelector), {})
    //$modal.modal('hide')
    bsModal.hide()
  }
}
