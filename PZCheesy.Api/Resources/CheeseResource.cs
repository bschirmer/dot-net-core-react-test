﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PZCheesy.Api.Resources
{
    public class CheeseResource
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Colour { get; set; }
        public float Price { get; set; }
        public string PictureRef { get; set; }
    }
}