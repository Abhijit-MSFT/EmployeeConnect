﻿using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class EandTModel
    {
        public EventsAndTraining[] EventsAndtraining { get; set; }
        public EventsAndTraining[] EventGrid { get; set; }
        public EventsAndTraining[] UpcomingEventGrid { get; set; }
        public EventsAndTraining[] UpcomingTrainingGrid { get; set; }
        public EventsAndTraining[] TrainingGrid { get; set; }
    }
    public class EventsAndTraining
    {
        [JsonProperty(PropertyName = "ETDate")]
        public DateTime ETDate { get; set; }

        [JsonProperty(PropertyName = "ETFlag")]
        public string ETFlag { get; set; }

        [JsonProperty(PropertyName = "ETID")]
        public string ETID { get; set; }

        [JsonProperty(PropertyName = "ETTitle")]
        public string ETTitle { get; set; }

        [JsonProperty(PropertyName = "ETStartDate")]
        public string ETStartDate { get; set; }

        [JsonProperty(PropertyName = "ETEndDate")]
        public string ETEndDate { get; set; }

        [JsonProperty(PropertyName = "ETStartTime")]
        public string ETStartTime { get; set; }

        [JsonProperty(PropertyName = "ETEndTime")]
        public string ETEndTime { get; set; }

        [JsonProperty(PropertyName = "ETThumbnailUrl")]
        public string ETThumbnailUrl { get; set; }

        [JsonProperty(PropertyName = "ETType")]
        public string ETType { get; set; }

        [JsonProperty(PropertyName = "ETDetails")]
        public string ETDetails { get; set; }

        [JsonProperty(PropertyName = "ETAgenda")]
        public string ETAgenda { get; set; }

        public bool UserAdded { get; set; }

        [JsonProperty(PropertyName = "ETMandatory")]
        public bool ETMandatory { get; set; }

    }
}