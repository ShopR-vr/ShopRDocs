---
title: Best Practices
sidebar_position: 10
description: Learn the best practices for creating and uploading virtual showrooms to the ShopR platform.
---

# Best Practices for your Showroom

Optimizing Unity scenes for mobile devices, especially for the Quest headsets, is essential to make your game run smoothly. This guide will help you understand some simple steps you can take to improve performance, even if you’re new to game development!

## **Keep geometry simple**

- **Use Low-Polygon Models when possible**: Try to use 3D models that are not too detailed for your Showroom's environment. This allows your Showroom to run faster. 
> **💡** Using simple geometry will also allow you to use more detailed products in your Showroom, while keeping the overall performance high.

## **Manage Textures Wisely**

- **Texture Size**: Use smaller textures for your Showroom. Try using sizes like **512x512** or **1024x1024**. This will allow you to use higher quality textures for your products.
- **Texture Compression**: Unity can help make your textures smaller without losing too much quality.
> **💡** Look at the models from a distance to see if the textures still look good. If they do, you’re on the right track!

## **Use Lighting Effectively**

- **Baked Lighting**: Use baked lighting whenever you can. This means Unity will calculate the light once and save it, so it doesn’t have to do it every frame.
- **Light Probes**: These are special points that help light dynamic objects (things that move) without needing many lights. They make your products look nice and correct while saving performance.
> **💡** Baked lighting will also make your game look more realistic and save battery life on users’ headset.
> Alongside other benefits, such as standing out in the ShopR platform with better visuals!

## **Simplify Physics**

- **Use Simple Colliders**: When you add physical interactions (like bumps and collisions), choose simple shapes (like boxes or spheres) instead of complex shapes. This makes the calculations faster.
> **💡** This will also make it easier to interact with your products in the Showroom.

---

> **💡 Pro Tip:** Always keep learning and exploring new features in Unity. The more you practice, the better your showrooms will look and perform!
