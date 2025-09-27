package dev.martindotpy.python;

import java.util.Map;

public interface SentimentIntensityAnalyzer {
    Map<String, Double> polarity_scores(String text);
}
