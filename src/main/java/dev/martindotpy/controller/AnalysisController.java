package dev.martindotpy.controller;

import java.util.Map;

import dev.martindotpy.python.GraalPyContext;
import dev.martindotpy.python.SentimentAnalysisService;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;
import lombok.RequiredArgsConstructor;

@Path("/api/analyze")
@RequiredArgsConstructor
public class AnalysisController {
    private final SentimentAnalysisService sentimentAnalysisService;
    private final GraalPyContext graalPyContext;

    @GET
    public Map<String, Double> answer(@QueryParam("text") String text) {
        System.out.println(
                // Show the path of the python libraries
                graalPyContext.eval("import sys; sys.path").toString());

        return sentimentAnalysisService.getSentimentScore(text);
    }
}
