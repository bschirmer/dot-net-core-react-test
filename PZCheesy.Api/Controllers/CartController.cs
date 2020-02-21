﻿using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PZCheesy.Core.Models;
using PZCheesy.Core.Services;

namespace PZCheesy.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ControllerBase
    {
        private readonly ICartService cartService;
        public CartController(ICartService cartService)
        {
            this.cartService = cartService;
        }

        [HttpPost("/cart/add")]
        public string AddToCart(string sku)
        {
            // Get all cheeses


            return sku;
        }

        [HttpGet("/cart/count")]
        public int GetCartCount()
        {
            return cartService.GetCartItems().Count; 
        }

    }
}