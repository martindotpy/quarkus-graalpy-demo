package dev.martindotpy.sentimentanalysis.controller;

import org.eclipse.microprofile.openapi.annotations.Operation;

import dev.martindotpy.sentimentanalysis.service.SentimentAnalysisService;
import dev.martindotpy.sentimentanalysis.vadersentiment.PolarityScore;
import jakarta.validation.constraints.NotBlank;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.QueryParam;
import lombok.RequiredArgsConstructor;

/**
 * REST controller for sentiment analysis.
 */
@Path("/analyze")
@RequiredArgsConstructor
public class AnalysisController {
    private final SentimentAnalysisService sentimentAnalysisService;

    @GET
    @Operation(summary = "Analyze text sentiment", description = "Returns the sentiment polarity score of the given text.", operationId = "analyzeText")
    public PolarityScore analyzeText(@NotBlank @QueryParam("text") String text) {
        return sentimentAnalysisService.getSentimentScore(text);
    }
}
