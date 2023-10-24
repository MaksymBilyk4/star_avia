package com.aviacharter.server.dto.operator;

import com.aviacharter.server.dto.order.OrderNoRelationResponseDto;
import com.aviacharter.server.entity.client.Client;
import com.aviacharter.server.entity.order.Order;
import com.aviacharter.server.entity.orderType.OrderType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class OperatorResponseDto {

    private Long id;
    private String operatorName;
    private Set<OrderNoRelationResponseDto> orders;

    @Override
    public String toString() {
        return "OperatorResponseDto{" +
                "id=" + id +
                ", operatorName='" + operatorName + '\'' +
                ", orders=" + orders +
                '}';
    }
}
