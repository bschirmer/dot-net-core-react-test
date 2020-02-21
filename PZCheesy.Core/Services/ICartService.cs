﻿using PZCheesy.Core.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PZCheesy.Core.Services
{
    public interface ICartService
    {
        bool AddToCart(string sku);
        void RemoveFromCart(Item item);
        void UpdateQuantity(Item item, decimal quantity);

        List<Item> GetCartItems();
        Item GetCartItem(string sku);
    }
}
