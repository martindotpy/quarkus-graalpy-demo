package dev.martindotpy.sentimentanalysis.vadersentiment;

import java.util.Map;

/**
 * Interface representing the VADER SentimentIntensityAnalyzer.
 *
 * This interface is used to interact with the Python VADER implementation via
 * GraalVM.
 */
public interface SentimentIntensityAnalyzer {
    /**
     * Calculate the polarity scores for the given text.
     *
     * @param text The text to analyze.
     * @return A map containing the polarity scores: "neg", "neu", "pos", and
     *         "compound".
     */
    Map<String, Double> polarity_scores(String text);
}
