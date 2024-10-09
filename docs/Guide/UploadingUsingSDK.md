---
title: 3. SDK Usage and Scene Upload
sidebar_position: 12
description: A comprehensive guide on using the ShopR SDK Export2 window to manage and upload your virtual stores and scenes.
---

# SDK Usage and Scene Upload

:::warning Update in Progress
We are currently updating our SDK. If you’re viewing this guide, you likely have access to our version referred to as `export2`. Please note that `export2` is a legacy name, and the SDK will soon be officially renamed to **ShopR SDK**.

An improved user interface is on the way
:::


## Overview

The `Export2` window is the cornerstone of the ShopR SDK, serving as your central hub for exporting and managing shops and scenes. This guide will walk you through the process of setting up your environment and uploading your meticulously crafted virtual stores to the ShopR platform.

## First-Time Setup

Follow these steps to get started with the ShopR SDK:

1. Open the `Export2` window:
   - Navigate to `ShopR SDK` > `Export2` in the Unity Editor menu.

2. Authenticate your ShopR account:
   - Log in using your ShopR credentials.

3. Create or select a shop:
   - If no shops are listed, click the `Create Shop` button.
   - Fill out the required fields in the `Create Shop` window.
   - Click `Create` to generate a new shop and an associated scene.
   - For existing shops, select from the list and click `Open Shop`.

:::tip
Creating a new shop automatically generates a default scene. This can serve as a starting point for your virtual store design.
:::

## Uploading Your Scene

Before uploading, ensure your scene meets the ShopR requirements:

### Prerequisites

Your scene must include the following component:
- [ShopRSceneDiscriptor](/docs/Components/ShopRSceneDiscriptor.md)

:::caution
Scenes without the required components may fail to upload or function correctly on the ShopR platform.
:::

### Upload Process

1. Access the `Export2` window:
   - Navigate to `ShopR SDK` > `Export2` in the Unity Editor menu.

2. Select your target shop:
   - Choose the shop you want to associate with your scene from the list.

3. Choose the scene to upload:
   - From the list of scenes associated with the selected shop, pick the one you wish to upload.

4. Initiate the upload:
   - Click the `Publish Android` button to start the upload process to the ShopR backend.

:::info
The `Publish Android` button specifically optimizes and packages your scene for Android devices, which is the primary platform for ShopR experiences.
:::