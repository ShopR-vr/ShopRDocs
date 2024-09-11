---
title: ShopRProduct
sidebar_position: 10
---

## What does this do?

This component tells ShopR to treat this model as a sellable product. This will allow users to add it to their cart.
:::warning
Your product must exist in the ShopR backend for this process to work. Please reach out to the ShopR Team to do this if you have not already
:::

## How do I do this?

1. Add your product model to the scene.

![SelectItem.png](img/SelectItem.png)

2. In the **Inspector** window, click on the **Add Component** button and search for **ShopR Product**.

![AddComponent.png](img/AddComponent.png)

3. Click on the **ShopR Product** component to add it to the model.

![ShopRProduct.png](img/ShopRProduct.png)

4. In the Shop R Product component fill out the fields for this product one at a time. In this example this is 3D Menagerie's Octopus (White).

![Component.png](img/Component.png)
![comp1.png](img/comp1.png)
![comp2.png](img/comp2.png)
![comp3.png](img/comp3.png)

# Tools!

The ShopR Product component has a few tools to help you manage products in your showroom in bulk to speed up the process of configuring this on all of your products.
At the bottom of the component you will see a foldout called "Tools" with a few options.

![img.png](tools.png)

- **Set All Products to This Merchant**: This will set all products in the scene to the merchant you have selected in this component. Typically every item in a showroom belongs to the same merchant. 
- **Set All Products with Same Mesh to This Product**: This will set all products in the scene with the same mesh to the product you have selected in this component.
- **Select All Products Not Set to a Product**: This will select every GameObject in the scene that has an incomplete ShopRProduct component. Use this to find products that have not been configured yet.
 