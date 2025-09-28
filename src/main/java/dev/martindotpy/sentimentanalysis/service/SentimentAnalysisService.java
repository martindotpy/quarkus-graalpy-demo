package dev.martindotpy.sentimentanalysis.service;

import java.util.Map;

import org.graalvm.polyglot.Value;

import dev.martindotpy.sentimentanalysis.graalpy.GraalPyContext;
import dev.martindotpy.sentimentanalysis.mapper.PolarityScoreMapper;
import dev.martindotpy.sentimentanalysis.vadersentiment.PolarityScore;
import dev.martindotpy.sentimentanalysis.vadersentiment.SentimentIntensityAnalyzer;
import jakarta.enterprise.context.ApplicationScoped;

/**
 * Service for performing sentiment analysis using VADER.
 */
@ApplicationScoped
public class SentimentAnalysisService {
    private final SentimentIntensityAnalyzer sentimentIntensityAnalyzer;
    private final PolarityScoreMapper polarityScoreMapper;

    public SentimentAnalysisService(GraalPyContext context, PolarityScoreMapper polarityScoreMapper) {
        Value value = context.eval("""
                from vader_sentiment.vader_sentiment import SentimentIntensityAnalyzer
                SentimentIntensityAnalyzer()
                                """);
        this.sentimentIntensityAnalyzer = value.as(SentimentIntensityAnalyzer.class);
        this.polarityScoreMapper = polarityScoreMapper;
    }

    /**
     * Get the sentiment score for the given text.
     *
     * @param text The text to analyze.
     * @return The polarity score.
     */
    public PolarityScore getSentimentScore(String text) {
        Map<String, Double> scores = sentimentIntensityAnalyzer.polarity_scores(text);

        return polarityScoreMapper.fromMap(scores);
    }
}
