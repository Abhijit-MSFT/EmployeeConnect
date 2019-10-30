

using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EmployeeConnect.Models
{
    public class Rootobjects
    {
        public string odatametadata { get; set; }
        public Values[] value { get; set; }
    }

    public class Values
    {
        public string odatatype { get; set; }
        public string odataid { get; set; }
        public string odataetag { get; set; }
        public string odataeditLink { get; set; }
        public int FileSystemObjectType { get; set; }
        public int Id { get; set; }
        public object ServerRedirectedEmbedUri { get; set; }
        public string ServerRedirectedEmbedUrl { get; set; }
        public string ContentTypeId { get; set; }
        public object ComplianceAssetId { get; set; }
        public object WikiField { get; set; }
        public string Title { get; set; }
        public string CanvasContent1 { get; set; }
        public Bannerimageurl BannerImageUrl { get; set; }
        public string Description { get; set; }
        public float PromotedState { get; set; }
        public DateTime? FirstPublishedDate { get; set; }
        public string LayoutWebpartsContent { get; set; }
        public int[] OData__AuthorBylineId { get; set; }
        public object OData__TopicHeader { get; set; }
        public object OData__SPSitePageFlags { get; set; }
        public object OData__OriginalSourceUrl { get; set; }
        public object OData__OriginalSourceSiteId { get; set; }
        public object OData__OriginalSourceWebId { get; set; }
        public object OData__OriginalSourceListId { get; set; }
        public object OData__OriginalSourceItemId { get; set; }
        //public int ID { get; set; }
        public DateTime Created { get; set; }
        public int AuthorId { get; set; }
        public DateTime Modified { get; set; }
        public int EditorId { get; set; }
        public object OData__CopySource { get; set; }
        public int? CheckoutUserId { get; set; }
        public string OData__UIVersionString { get; set; }
        public string GUID { get; set; }
    }

    public class Bannerimageurl
    {
        public string Description { get; set; }
        public string Url { get; set; }
    }

}





