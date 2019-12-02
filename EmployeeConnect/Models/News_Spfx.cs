
using System;


namespace EmployeeConnect.Models
{
    public class SpfxNews
    {
        public string odatametadata { get; set; }
        public Values[] value { get; set; }
    }

    public class Values
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public object ServerRedirectedEmbedUri { get; set; }
        public string ServerRedirectedEmbedUrl { get; set; }
        public string ContentTypeId { get; set; }
        public string Title { get; set; }
        public string CanvasContent1 { get; set; }
        public Bannerimageurl BannerImageUrl { get; set; }
        public string Description { get; set; }    
        //public int ID { get; set; }
        public DateTime Created { get; set; }
        public int AuthorId { get; set; }
        public DateTime Modified { get; set; }
        public int EditorId { get; set; }
        public string  Category { get; set; }
        public string NewsBy { get; set; }
        public string OData__UIVersionString { get; set; }
        public string GUID { get; set; }
    }

    public class Bannerimageurl
    {
        public string Description { get; set; }
        public string Url { get; set; }
    }

}





