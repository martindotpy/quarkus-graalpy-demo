package dev.martindotpy.sentimentanalysis.vadersentiment;

import org.eclipse.microprofile.openapi.annotations.media.Schema;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * Represents the polarity scores returned by the VADER sentiment analysis.
 */
@Getter
@AllArgsConstructor
public class PolarityScore {
    @Schema(description = "Negative sentiment score")
    private Double neg;

    @Schema(description = "Neutral sentiment score")
    private Double neu;

    @Schema(description = "Positive sentiment score")
    private Double pos;

    @Schema(description = "Compound sentiment score")
    private Double compound;
}
