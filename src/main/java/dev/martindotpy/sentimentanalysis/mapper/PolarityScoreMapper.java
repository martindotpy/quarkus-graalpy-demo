package dev.martindotpy.sentimentanalysis.mapper;

import java.util.Map;

import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

import dev.martindotpy.sentimentanalysis.vadersentiment.PolarityScore;

/**
 * Mapper for converting a map of sentiment scores to a PolarityScore object.
 */
@Mapper(componentModel = MappingConstants.ComponentModel.CDI)
public interface PolarityScoreMapper {
    PolarityScore fromMap(Map<String, Double> map);
}
