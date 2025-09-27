package dev.martindotpy.page;

import io.quarkus.qute.CheckedTemplate;
import io.quarkus.qute.TemplateInstance;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;

@Path("/")
public class IndexPage {
    @CheckedTemplate
    public static class Templates {
        public static native TemplateInstance index();
    }

    @GET
    public TemplateInstance index() {
        return Templates.index();
    }
}
