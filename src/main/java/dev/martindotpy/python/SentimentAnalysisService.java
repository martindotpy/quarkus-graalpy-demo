package dev.martindotpy.python;

import java.util.Map;

import jakarta.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class SentimentAnalysisService {

    private final SentimentIntensityAnalyzer sentimentIntensityAnalyzer;

    public SentimentAnalysisService(GraalPyContext context) {
        var value = context.eval("""
                from vader_sentiment.vader_sentiment import SentimentIntensityAnalyzer
                SentimentIntensityAnalyzer()
                                """);
        sentimentIntensityAnalyzer = value.as(SentimentIntensityAnalyzer.class);
    }

    public Map<String, Double> getSentimentScore(String text) {
        return sentimentIntensityAnalyzer.polarity_scores(text);
    }
}
