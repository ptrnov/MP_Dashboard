
export class DomCard{

 public initCard():void{
    /** ROW 1*/
    document.getElementById("dsh2[0]").hidden = false;
      /** CARD */
      document.getElementById("dsh2[0]card[0]").hidden = false;
        /** CARD CONTENT */
        document.getElementById("dsh2[0]card[0]content").hidden = false;
            /** CONTENT HEADER */
            document.getElementById("dsh2[0]card[0]content[0]").hidden = false;
                /** CONTENT HEADER PROPERTIES */
                document.getElementById("dsh2[0]card[0]content[0]-properties-lbl").hidden = false;
                document.getElementById("dsh2[0]card[0]content[0]-properties-lbl").innerHTML = " All Project";
            /** CONTENT CONTENT*/
            document.getElementById("dsh2[0]card[0]content[1]").hidden = false;
                /** CONTENT CONTENT PROPERTIES */
                document.getElementById("dsh2[0]card[0]content[1]-properties-img").hidden = false;
                document.getElementById("dsh2[0]card[0]content[1]-properties-lbl").hidden = false;
        /** CARD FOOTER */
        document.getElementById("dsh2[0]-card[0]footer").hidden = false;
          /** CARD FOOTER PROPERTIES */
          document.getElementById("dsh2[0]-card[0]footer-properties-lbl[0]").hidden = false;
          document.getElementById("dsh2[0]-card[0]footer-properties-lbl[1]").hidden = true;
  }
}
