﻿using Microsoft.Azure.Documents;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace EmployeeConnect.Models
{
    public class TaskInfo
    {                                              
        [JsonProperty("url")]
        public string Url { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("card")]
        public object Card { get; set; }

        [JsonProperty("height")]
        public object Height { get; set; }

        [JsonProperty("width")]
        public object Width { get; set; }

        [JsonProperty("fallbackUrl")]
        public string FallbackUrl { get; set; }
        [JsonProperty("botcompletionid")]
        public string completionBotId { get; set; }
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this);
        }
    }
    public class TaskEnvelope
    {
        [JsonProperty("task")]
        public Task Task { get; set; }
    }

    public class Task
    {
        [JsonProperty("value")]
        public TaskInfo TaskInfo { get; set; }

        [JsonProperty("type")]
        public string Type { get; set; }
    }

    public enum TaskType
    {
        /// <summary>
        /// Teams will display the value of value in a popup message box.
        /// </summary>
        [EnumMember(Value = "message")]
        Message,

        /// <summary>
        /// Allows you to "chain" sequences of Adaptive cards together in a wizard/multi-step experience.
        /// </summary>
        [EnumMember(Value = "continue")]
        Continue
    }
}