using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class SpfxEandT
    {
        public string odatametadata { get; set; }
        public Value[] value { get; set; }
    }

    public class Value
    {
        public string odatatype { get; set; }
        public string odataid { get; set; }
        public string odataetag { get; set; }
        public string odataeditLink { get; set; }
        public int FileSystemObjectType { get; set; }
        public int Id { get; set; }
        public object ServerRedirectedEmbedUri { get; set; }
        public string ServerRedirectedEmbedUrl { get; set; }
        public int ID { get; set; }
        public string ContentTypeId { get; set; }
        public string Title { get; set; }
        public DateTime Modified { get; set; }
        public DateTime Created { get; set; }
        public int AuthorId { get; set; }
        public int EditorId { get; set; }
        public string OData__UIVersionString { get; set; }
        public bool Attachments { get; set; }
        public string GUID { get; set; }
        public object ComplianceAssetId { get; set; }
        public string Location { get; set; }
        public Geolocation Geolocation { get; set; }
        public DateTime EventDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Description { get; set; }
        public bool fAllDayEvent { get; set; }
        public bool fRecurrence { get; set; }
        public object ParticipantsPickerId { get; set; }
        public object ParticipantsPickerStringId { get; set; }
        public string Category { get; set; }
        public string FreeBusy { get; set; }
        public object Overbook { get; set; }
        public Bannerurl BannerUrl { get; set; }
        public string _1f2f { get; set; }
    }

    public class Geolocation
    {
        public float Altitude { get; set; }
        public float Latitude { get; set; }
        public float Longitude { get; set; }
        public float Measure { get; set; }
    }

    public class Bannerurl
    {
        public string Description { get; set; }
        public string Url { get; set; }
    }


}







